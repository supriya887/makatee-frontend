// Next Imports
import { NextResponse } from "next/server";
import { ensurePrefix, withoutSuffix } from "./lib/utils/string";

// Constants
const HOME_PAGE_URL = "/";

const _redirect = (url, request) => {
  const _url = ensurePrefix(url, `${process.env.BASEPATH || ""}`);
  const redirectUrl = new URL(_url, request.url).toString();
  return NextResponse.redirect(redirectUrl);
};

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("makatee-access-token")?.value || null;
  const isUserLoggedIn = !!token;

  const guestRoutes = ["login", "register", "forgot-password"];
  const sharedRoutes = [
    "/",
    "home",
    "product",
    "trophy",
    "uniform",
    "category",
    "blog",
    "cart",
    "contact-us",
    "about-us",
    "terms-conditions",
    "refund-return-policy",
    "privacy-policy",
    "shipping-policy",
    "delivery-information",
    "satisfaction-guarantee",
    "search",
    "shop",
    "videos"
  ];

  const isGuestRoute = guestRoutes.some(
    (route) => pathname === `/${route}` || pathname.startsWith(`/${route}/`)
  );

  const isSharedRoute = sharedRoutes.some(
    (route) =>
      pathname === `/${route}` ||
      pathname.startsWith(`/${route}/`) ||
      pathname === "/"
  );

  const isPrivateRoute = !isGuestRoute && !isSharedRoute;

  // Redirect guest trying to access private route
  if (!isUserLoggedIn && isPrivateRoute) {
  let redirectUrl = "/login";

    if (pathname !== "/") {
      const searchParamsStr = new URLSearchParams({
        redirectTo: withoutSuffix(pathname, "/"),
      }).toString();
      redirectUrl += `?${searchParamsStr}`;
    }

    return _redirect(redirectUrl, request);
  }

  // Redirect logged-in user away from guest routes
  if (isUserLoggedIn && isGuestRoute) {
    return _redirect(HOME_PAGE_URL, request);
  }

  // Allow access
  return NextResponse.next();
}

// Matcher Config
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|assets|undefined).*)",
  ],
};

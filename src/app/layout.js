"use client";

import "../../public/assets/upload-file/style.css";
// import "../../public/assets/css/aos.css";

import Script from "next/script";

import AOSInit from "@/components/AOSInit";
import { IoArrowUpOutline } from "react-icons/io5";

import { Toaster } from "react-hot-toast";
import { persistor, store } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Initializer from "@/components/Initializer";
import Aos from "aos";
import { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const metadata = {
  title: "Makatee",
  description: "Makatee",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="EN" />
        <title>Makatee</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="/assets/images/favicon-32x32.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.2.0/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.8/css/fileinput.min.css"
        />
        {/* <link rel="stylesheet" href="upload-file/style.css" /> */}
        <link rel="stylesheet" href="/assets/css/makatee.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/media-queries.css" />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <AOSInit />
        <a className="align-content-center" id="backtotop">
          <IoArrowUpOutline color="white" size={24} />
        </a>
        <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Initializer>{children}</Initializer>
              <Toaster position="top-center" />
            </PersistGate>
          </Provider>
        </GoogleOAuthProvider>

        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.8/js/fileinput.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.8/js/plugins/sortable.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.0.8/themes/fas/theme.min.js"></Script>
        <Script src="/assets/upload-file/script.js"></Script>
        <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
        {/* <Script>{Aos.init()}</Script> */}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.2.0/jquery.magnific-popup.min.js"></Script>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script src="/assets/js/custom.js"></Script>
      </body>
    </html>
  );
}

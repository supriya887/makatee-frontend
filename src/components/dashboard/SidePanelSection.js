"use client";

import { setAccessToken, setUserData } from "@/store/slices/user-slice";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  IoAlbumsOutline,
  IoCubeOutline,
  IoHeartOutline,
  IoKeypadOutline,
  IoLocationOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function SidePanelSection() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const [toogleDashboard, setToogleDashboard] = useState("");
  const handleLogout = (e) => {
    e.preventDefault();

    Cookies.remove("makatee-access-token");
    localStorage.removeItem("makatee-access-token");
    dispatch(setAccessToken(null));
    dispatch(setUserData(null));

    router.replace("/");
  };

  return (
    <div>
      {" "}
      <div className="mobile-none">
        <div className="dashborad_side_panel">
          <ul>
            <li>
              <a
                className={pathname == "/dashboard" ? "active" : ""}
                href="/dashboard"
              >
                <IoAlbumsOutline className="icon" />

                <h6>Dashboard</h6>
              </a>
            </li>
            <li>
              <a
                className={pathname == "/profile" ? "active" : ""}
                href="/profile"
              >
                <IoPersonOutline className="icon" />
                <h6>Account</h6>
              </a>
            </li>
            <li>
              <a
                className={pathname == "/orders" ? "active" : ""}
                href="/orders"
              >
                <IoCubeOutline className="icon" />
                <h6>Order History</h6>
              </a>
            </li>
            <li className="">
              <a
                className={pathname == "/wishlist" ? "active" : ""}
                href="/wishlist"
              >
                <IoHeartOutline className="icon" />
                <h6>Wishlist</h6>
              </a>
            </li>
            <li className="">
              <a
                className={pathname == "/address" ? "active" : ""}
                href="/address"
              >
                <IoLocationOutline className="icon" />
                <h6>Addresses</h6>
              </a>
            </li>
            {/* <li className="">
              <a href={`/payment-method`}>
                <IoWalletOutline className="icon" />
                <h6>Payment Method</h6>
              </a>
            </li> */}
            <li className="">
              <a
                className={pathname == "/change-password" ? "active" : ""}
                href="/change-password"
              >
                <IoKeypadOutline className="icon" />
                <h6>Change Password</h6>
              </a>
            </li>
            <li>
              <a onClick={handleLogout}>
                <IoLogOutOutline className="icon" />
                <h6>Logout</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="desktop-none">
        <button
          id="toggleDashboard"
          onClick={() => setToogleDashboard(!toogleDashboard)}
        >
          Toggle Dashboard
        </button>
        {toogleDashboard ? (
          <div
            className="dashborad_side_panel"
            id="myDiv"
            style={{ display: "block" }}
          >
            <ul>
              <li>
                <a
                  className={pathname == "/dashboard" ? "active" : ""}
                  href="/dashboard"
                >
                  <IoAlbumsOutline className="icon" />

                  <h6>Dashboard</h6>
                </a>
              </li>
              <li>
                <a
                  className={pathname == "/profile" ? "active" : ""}
                  href="/profile"
                >
                  <IoPersonOutline className="icon" />
                  <h6>Account</h6>
                </a>
              </li>
              <li>
                <a
                  className={pathname == "/orders" ? "active" : ""}
                  href="/orders"
                >
                  <IoCubeOutline className="icon" />
                  <h6>Order History</h6>
                </a>
              </li>
              <li className="">
                <a
                  className={pathname == "/wishlist" ? "active" : ""}
                  href="/wishlist"
                >
                  <IoHeartOutline className="icon" />
                  <h6>Wishlist</h6>
                </a>
              </li>
              <li >
                <a
                  className={pathname == "/address" ? "active" : ""}
                  href="/address"
                >
                  <IoLocationOutline className="icon" />
                  <h6>Addresses</h6>
                </a>
              </li>
              {/* <li className="">
              <a href={`/payment-method`}>
                <IoWalletOutline className="icon" />
                <h6>Payment Method</h6>
              </a>
            </li> */}
              <li className="">
                <a
                  className={pathname == "/change-password" ? "active" : ""}
                  href="/change-password"
                >
                  <IoKeypadOutline className="icon" />
                  <h6>Change Password</h6>
                </a>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <IoLogOutOutline className="icon" />
                  <h6>Logout</h6>
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

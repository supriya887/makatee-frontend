"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
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

export default function SidePanelSection() {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();

    Cookies.remove("makatee-access-token");
    localStorage.removeItem("makatee-access-token");

    router.replace("/");
  };

  return (
    <div>
      {" "}
      <div className="mobile-none">
        <div className="dashborad_side_panel">
          <ul>
            <li>
              <a href="/dashboard">
                <IoAlbumsOutline className="icon" />

                <h6>Dashboard</h6>
              </a>
            </li>
            <li>
              <a href="/profile">
                <IoPersonOutline className="icon" />
                <h6>Account</h6>
              </a>
            </li>
            <li className="active">
              <a href="/orders">
                <IoCubeOutline className="icon" />
                <h6>Order History</h6>
              </a>
            </li>
            <li className="">
              <a href="/wishlist">
                <IoHeartOutline className="icon" />
                <h6>Wishlist</h6>
              </a>
            </li>
            <li className="">
              <a href="/address">
                <IoLocationOutline className="icon" />
                <h6>Addresses</h6>
              </a>
            </li>
            <li className="">
              <a href={`/payment-method`}>
                <IoWalletOutline className="icon" />
                <h6>Payment Method</h6>
              </a>
            </li>
            <li className="">
              <a href="/change-password">
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
        <button id="toggleDashboard">Toggle Dashboard</button>
        <div
          className="dashborad_side_panel"
          id="myDiv"
          style={{ display: "none" }}
        >
          <ul>
            <li>
              <a href="/dashboard">
                <IoAlbumsOutline className="icon" />

                <h6>Dashboard</h6>
              </a>
            </li>
            <li>
              <a href="/profile">
                <IoPersonOutline className="icon" />
                <h6>Account</h6>
              </a>
            </li>
            <li className="active">
              <a href="/orders">
                <IoCubeOutline className="icon" />
                <h6>Order History</h6>
              </a>
            </li>
            <li className="">
              <a href="/wishlist">
                <IoHeartOutline className="icon" />
                <h6>Wishlist</h6>
              </a>
            </li>
            <li className="">
              <a href="/address">
                <IoLocationOutline className="icon" />
                <h6>Addresses</h6>
              </a>
            </li>
            <li className="">
              <a href={`/payment-method`}>
                <IoWalletOutline className="icon" />
                <h6>Payment Method</h6>
              </a>
            </li>
            <li className="">
              <a href="/change-password">
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
    </div>
  );
}

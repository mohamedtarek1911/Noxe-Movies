import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { store } from "../../Redux/Store";

export default function AuthLayout() {
  return (
    <>
      <Provider store={store}>
        <Navbar Auth={true} />
        <div className="w-50 m-auto my-5">
          <Outlet />
        </div>
      </Provider>
    </>
  );
}

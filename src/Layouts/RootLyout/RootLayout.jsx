import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { store } from "../../Redux/Store";

export default function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
}

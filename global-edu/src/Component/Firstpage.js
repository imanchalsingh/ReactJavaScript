import React from "react";
import Logo from "./logo.png";

export default function Firstpage() {
  return (
    <div
      style={{
        // backgroundColor: "#002e4d",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: "50%", height: "160px" }} src={Logo} alt="logo" />

      <div>
        <h1
          style={{ backgroundColor: "#29a3290"}}
        >
          Mathematics
        </h1>
        <h1>Physics</h1>
        <h1>Chemistry</h1>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const LogoMenu = () => {
  return (
    <Link style={{ marginLeft: "30px" }} to="/">
      <img src="/images/logo-1.png" height="150px" width="180px" />
    </Link>
  );
};

export default LogoMenu;

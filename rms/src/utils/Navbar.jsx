import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import NavbarUser from "../components/NavbarUser";
import NavbarGen from "../components/Navbar";
import { useUserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { currentUser, token } = useUserContext();
  return token !== "" ? (
    currentUser.role === "admin" ? (
      <NavbarAdmin />
    ) : (
      <NavbarUser />
    )
  ) : (
    <NavbarGen />
  );
};

export default Navbar;

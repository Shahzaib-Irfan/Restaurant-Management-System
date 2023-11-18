import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import NavbarUser from "../components/NavbarUser";
import { useUserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { currentUser } = useUserContext();
  return (
    currentUser &&
    (currentUser.role === "admin" ? <NavbarAdmin /> : <NavbarUser />)
  );
};

export default Navbar;

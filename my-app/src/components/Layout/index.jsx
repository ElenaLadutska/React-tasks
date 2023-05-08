import { useState } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = ({ city, setCity }) => {
  const [isAuthorized, setAuthorisation ] = useState(false);
  const [isModalOpen, setOpenModal] = useState(false);

  return (
    <>
      <Header 
        city={city}
        setCity={setCity}
        isAuthorized = {isAuthorized}
        setAuthorisation = {setAuthorisation}
        isModalOpen = {isModalOpen}
        setOpenModal = {setOpenModal}
      />

      <Outlet />
    </>
  )
}

export default Layout;

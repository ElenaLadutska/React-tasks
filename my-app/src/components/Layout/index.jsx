import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Header 
        city={props.city}
        setCity={props.setCity}/>

      <Outlet />
    </>
  )
}

export default Layout;

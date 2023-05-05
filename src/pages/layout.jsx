import {React,useEffect} from "react";
import {Outlet,useLocation} from "react-router-dom";
import Navbar from "../Navbar";
import Navbarbottom from "../Navbarbottom";
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Layout = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <Outlet />
      <Navbarbottom/>
    </>
  );
};

export default Layout;

import React from "react";
import {Link} from "react-router-dom";
import "./index2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlog, faBurger, faCheckSquare, faCoffee, faHome, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

library.add(faHome,faBlog,faCheckSquare,faUtensils,faPhone)

function Navbarbottom() {
  useEffect(() => {
    // const color = getComputedStyle(document.documentElement).getPropertyValue('--color-logo');
    // console.log(`--color-logo: ${color}`);
  const indicator = document.querySelector("[data-indicator]")
  
  document.addEventListener("click", e => {
    let anchor
    if (e.target.matches(".a-anchor")) {
      anchor = e.target
    } else {
      anchor = e.target.closest(".a-anchor")
    }
    if (anchor != null) {
      const allAnchors = [...document.querySelectorAll(".a-anchor")]
      const index = allAnchors.indexOf(anchor)
      indicator.style.setProperty("--position", index)
      document.querySelectorAll(".a-anchor").forEach(elem => {
        elem.classList.remove("active")
      })
      anchor.classList.add("active")
    }
  })
  }, [])
  return (
    
    <div className="shadow sticky-bottom d-flex position-fixed w-full pb-0 mb-0 justify-content-center align-items-center">

    <ul className="list">
      <div data-indicator className="indicator">
        <div className="corners"></div>
      </div>
      <li>
      <Link to="/" className="a-anchor active">
        <div className="icon">
        <FontAwesomeIcon icon={faHome}/>
        </div>
        <div className="text">Home</div>
        </Link>      
      </li>
      <li>
      <Link to="/blogs" className="a-anchor">
        <div className="icon">
        <FontAwesomeIcon icon={faBlog} />
        </div>
        <div className="text">Blogs</div>
        </Link></li>
      <li>
      <Link to="/contact" className="a-anchor">
        <div className="icon">
        <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="text">Contact</div>
        </Link></li>
      <li>
      <Link to="/about" className="a-anchor">
        <div className="icon">
        <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div className="text">About</div>
        </Link></li>
    </ul>
    
  </div>
  );
}
export default Navbarbottom;



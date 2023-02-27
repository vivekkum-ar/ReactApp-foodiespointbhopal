import './basicCss.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
        {/* Hero Section starts here */}
        <div style={{backgroundImage: `url("./images/hero2.png")`,backgroundRepeat: "no-repeat",backgroundSize:"cover"}} className="animate__animated animate__fadeInDown cover-container d-flex w-100 h-100 mx-auto flex-column">
        
                <main className="px-3 py-lg-5 pt-sm-2">
                <div className="d-flex ps-3 fw-bolder justify-content-start">
                <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap fw-bolder font-poppins py-1 py-lg-2">FOOD FOR EVERY MOOD</p>
                </div>
                  <p className="lead px-3 width-100-sm">Looking for a delicious dining experience? Look no further than FoodiesPoint Bhopal! Our diverse menu and cozy atmosphere make us the perfect destination for foodies. Come visit us today!</p>
                  <div className="d-lg-inline-flex">
                  <p className="lead px-3 pt-3">
                  <Link className="nav-link font-poppins text-prime" to="/about">
                    <a className="btn btn-lg btn-light fw-bold border-white bg-white">About us</a>
                    </Link>
                  </p>
                  <p className="lead px-3 pt-3">
                  <Link className="nav-link font-poppins text-prime" to="/menu"> 
                    <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">go to MENU</a>
                    </Link>
                  </p>
                  </div>
                </main>
        <svg xmlns="http://www.w3.org/2000/svg" className='svg-wave p-0 m-0' viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
              </div>
        {/* Hero section ends here */}
        </>
    );
}

export default Home;
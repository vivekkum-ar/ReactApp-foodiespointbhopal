import "./basicCss.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import Video from "./images/video.mp4";
import Video2 from "./images/video2.mp4";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      {/* Hero Section starts here */}
      <div
        style={{
          backgroundImage: `url("./images/hero2.png")`,
          Repeat: "no-backgroundrepeat",
          backgroundSize: "cover",
        }}
        className="animate__animated animate__fadeInDown cover-container d-flex w-100 h-100 mx-auto flex-column"
      >
        <main className="px-3 py-lg-5 pt-sm-2">
          <div className="d-flex ps-3 fw-bolder justify-content-start">
            <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap fw-bolder font-poppins py-1 py-lg-2">
              FOOD FOR EVERY MOOD
            </p>
          </div>
          <p className="lead px-3 width-100-sm">
            Looking for a delicious dining experience? Look no further than
            FoodiesPoint Bhopal! Our diverse menu and cozy atmosphere make us
            the perfect destination for foodies. Come visit us today!
          </p>
          <div className="d-lg-inline-flex">
            <p className="lead px-3 pt-3">
              <Link className="nav-link font-poppins text-prime" to="/about">
                <a className="btn btn-lg btn-light fw-bold border-white bg-white">
                  About us
                </a>
              </Link>
            </p>
            <p className="lead px-3 pt-3">
              <Link className="nav-link font-poppins text-prime" to="/menu">
                <a
                  href="#"
                  className="btn btn-lg btn-light fw-bold border-white bg-white"
                >
                  go to MENU
                </a>
              </Link>
            </p>
          </div>
        </main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-wave p-0 m-0"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L40,176C80,192,160,224,240,202.7C320,181,400,107,480,112C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* Hero section ends here */}

      {/* Dine with us starts here */}
      <div className="px-4 pt-1 my-5 text-center border-bottom">
        <div className="d-flex justify-content-center">
          <p className="text-prime-gradient fw-bolder display-5 lh-1 border-bottom text-wrap font-poppins py-1 py-lg-2">
            Dine with us!
          </p>
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="lead text-black py-2 my-5">
            Experience the magic of Indian hospitality and cuisine at our
            restaurant. We welcome you to savor the authentic flavors of our
            dishes and indulge in the warmth of our cozy atmosphere. Come, join
            us for an unforgettable dining experience today!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link className="btn px-4 me-sm-3" to="/contact">
              Contact us
            </Link>
            <Link
              className="nav-link btn px-4 font-poppins text-prime"
              to="/menu"
            >
              Go to menu
            </Link>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div className="d-flex justify-content-center">
            <img
              src={"./images/hero2.jpg"}
              className="img-fluid border-customised mb-4"
              alt="Example image"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* End of Dine with us */}

      {/* Feature grid starts here */}
      <div className="container px-4 py-5" id="icon-grid">
        <div className="d-flex justify-content-center border-bottom">
          <p
            className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap font-poppins py-2"
            id="services-offered"
          >
            Why choose us?
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR4nO2ZO2hUQRSGv6goaHwVEYmC78aA4KMTE+yMhY1g7O2CFgZiYynauLUkVhZJYSV2gkQQtAkBBRUjKErWR5HdEMFX1sfIhFkYr5u9M3N3s2cu+8Opds7M/917ZubuDCyvTgLvAeUYRaAfgSp6QCgTMwiUCgxxyg1IMS+l1e8JMwOcaLXp3GujR9u1CNUB4I9Haf0CdiFQYwGTvYAwbQMqASDzwAYE6VKGfeQCgvQ0A8ijZhhaDewADgP7gXUOOV3Alwwgv4HuRphfCQwA94CvNVaWKWAIWG/ldAJHgQ5rjtwypkJgzmeFOAi8cBioZN4S5ulVcyYNUFW6zcMAkIksEKeAHw6DfAR6TM5u4E3id7133AZ2Wn2fBl57gHwH1oRAHAMWHAZ4C+w1OXrOfEgxc80qQW1s2CyxLjDak5d0fb9z6PglsN3kHAFmHQ19As4BK6zF4AbwMyXvcjPW/CfAFtO+F/gcUPe6j+PWuD1mQVmq/V0fiA6HT+3HwCbr0/xbAIQdd6zyrPZZa4F5hocOpQx639o7zjjOI5fQ/RSsB7QKGEyUq96L2opGncBNYK5BJbKcMQeMGoZFCBV5jGqQsgAjWaOMABONClptoA1C4o3kYY6U8rJqjVT3kZFI30zZeF/cR9qSLOUY9XKa8Zty8PGPXkUEMl0PpBARyPV6IH0RgfSmHcSVIgApm3+QdTUeAcgYDjobAciA69VYRTBIxTqgSNUDwSATeGhIMMhFH5A9DnXaqtiHp6YFmFY1zpq9dUWAcZWIqyEgm829hxIS88DWEBAtfQ6sLzF9LvkbHXrs54lT+//0F5/sJFMaV+oSAAAAAElFTkSuQmCC"
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                High-quality ingredients
              </h3>
              <p className="text-dark">
                Fresh, high-quality ingredients elevate the flavor of every
                dish.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0ElEQVR4nO2azUtUURjGf33QmJEYpUYtcm/QH1DLUIJKl6YtWxWluOlP6MM2WiBto0VrcyrBbR9EX6tmHF01BlFTCynULE8ceAeG4cz13vNx5xo+8IAwznPOw/ve95z3vQPb+H9xABgAxoE8UAR+AGtC/XdBPtP/0w+0kxHkgGFgFvgDqITU33kKDIlW6tgLjAGfLTbfiEvAKNCSlokzwKJHA/VcAPpCGtChnwhooJ4PJPJe0QW8SdGEEr4GOn2Z6JZwqyaxJHtwQoeUUdVkLgKHbU20NCmdVESaWZXoqQxsXtXxrk2JVRllb1wTOnzzGdiwasCFuIfmmIW4L6iYHIkTjaUtYKS82YM/HCAVfknFuVazuM7zVUfdC1FGZgPn9wfgiKw14qj1JKqfsLmKJ+V7YA+wE/jooLMOtJmMDKRgosornqJyzmTkTopGXsiaJxx1bpuM5B0EfUEl5LRJpLQFjRRNIt9TTK3nnlLrq8nIWopGLsuao446q8008tZT+VWNjFRSMPGupkFyjYYCvpmMhLrx/gReytlRe0XxkQEFk5EZB8G42CWHoOs9S0WV3/FARvYBx8VAwXO0b5kW7HcQ7BGNg8BcoBRVBp41GWl3uDQuA+dFZzcwmYKJ340ujRrPHIQ3gJvADtG6CKwENDITlc9DHhZ4BLSK3kngSyAjgyFaXVMDVZ0OHpUO0aeJshyqkfBxUCmJxCnRbJVI+TJydTMT1aj4GpPqQ++S6Opn5zrw11GzlGTi2Oc5FSalmiHVbdmhoJwmIe55NjMn54zGQ0uNCSyQC/CQ6qn6DcvvvorzgDfCoQy9VujCEd2ObbAr54FjeEJngDSLm04dBHoZupGSifuh3733Bk61ok2JtUVO+ouyRwOf5MRuyi8gcjIVz8ssNunm1+UWO+hSWn2jTWaxeoz5WLrBSs2PaioyNZmWzk43Rfu972IbZAP/AByB4k8ELWs6AAAAAElFTkSuQmCC"
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Reasonable pricing
              </h3>
              <p className="text-dark">
                Affordable and reasonable pricing to cater to diverse customers.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,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"
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Menu variety
              </h3>
              <p className="text-dark">
                Diverse menu with delicious options to satisfy all palates.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxUlEQVR4nO2az0tUURTHP/2gsSAxMo2ByHXQqhYtijahBEbuNP0H2ljiooL6B8yCogha6j4IbSiX7kQqaJPj6CLUVk4tokVqeePCGRimN2/eu++8+x7hFw7MMO+dcz9z75x7zn0De/p/dQwYACaBElAGvgNbYvb1knxmr7kOdJATFYARYA74DZiYZu95CwyLL+86DIwDXx0G38w2gDGgzRfEVWBVEaDRVoC+NAHs1D9NEaDRpmXmVdUNvPcIYcQWgS4tiB6ZbpORVWQMiXRC0qjJ2FaBk64QbRktJxOyzJxS9IsMBvsNOA9cbPL5M5cU6xviJ3BB4p8Lua43KoSdvmXPENvy5VmdAtZCrl2JummOe4b4AwzWpflKhHtuR5mNDc8gtyR2O/Ah4j3rrX74I54h7ktcu4PPx7z3RhjInEeIWgY6ALxyuL8U1k+4lOIuNgXsE5t29LEjy/EfDXiCmAUOSszHCX31B4E88gAxX1fRPlDw9zAIpJQyxCdZvlY3lXzOBIFEyd9xzPbpd4CiWA1iUPYOjRjlIJCqMsjdgBhnBVArxmYQiGYAI7PQqOPKMX5lBVL0AVL1sLTuKcfYDALRrni3BKYouzfyXjPGku/0+xHYL+X3F0W/M0EgkymCGClItQvTiSxKFFt6H5H6alHJZ38QSIeHorGWAC4rdZXtNNG7lEF+SBdo9TqhrzeEaDhlkPo+5ExCP0NZt7rbctxzKYGPNeAQLTTmYVaS2mgriNqs5OGY1DSxSpwTx74cDNgE2C5whZh6noOBmwZ7goMKihuXhi1E+YE3U2eOHit0k1A9KbTBcWwZOI2SujJaZgvysCmVh6G7niBepv3svTflpVZ2SbGuKsjR/roigC07RrP6B0RBTsVLchYbd/A7UsUOJUmt2rK9wTU5xpyVfrpa96ca+/qztKcT0hQdVR/FnsiH/gIfNynorzefigAAAABJRU5ErkJggg=="
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Timely service
              </h3>
              <p className="text-dark">
                Prompt delivery of food and attentive service to diners.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/ElEQVR4nO2VOwrCQBRFT2GroL2NCm7ERm2EYOtixL2IEnADVqJCVqCFNmoT/IBuIDIwggn5jJOJRPDAhRDy7gnhJYE/OaYDzIG7jDhuZy0dAV5EhqYkVcAGHjGyqIiZGdDUkV41hMHcZJcytgHpK1N1rd7jjYpYQGU8w8m/uAj0gG0K2QGwZNfHlGWBjrSiKukCJzl4fPsa9TXEVkKnj2PIXQtKGuJiQqePfcxS6C5T8PyOEFpptjGCYF9L9ULT4q+9v/kXXzKUnuPEkwzF4zhxA3AzkLpAnQRqgGNQ6shOJV4/hwH6DGTH5pOhJbACCinEYnYNLFJ0/PlhnvpueMCp57OaAAAAAElFTkSuQmCC"
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Comfortable seating
              </h3>
              <p className="text-dark">
                Ergonomic and inviting seating to ensure customers' comfort.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdklEQVR4nO2aW6hWVRDHf2k3j9mhe1l4ScIunMCTFZllFhaKRT0UBT0k1UNEPUiIJEiaD0WQUZhakUVmaCmKntPV6H7Rih6yIsUszdLEy7GjpJ6zZWA2bBaz1l5rfxcR/MM8fN/ea2b/95qZNTPfB8dw9GIQ8AGwB3hfPzcblwAfA136LOdUUfIhkBVEFDUTLcB65xk6qyja6yiRt9JMzHbsZ+odyfjIUSI71CyMAnoMIp9VUTZYyXQrCfncDJwM/GqQEGLXchThaYNEpq7WcAwDOoADKu8CbRX0XAUcMkhs0OBvKIZqEFqBOSRBz0nAT4aeXuAGmoDlHlcQWZagZ5ZHxxyaBDdNV0nZI9Ql3fWbgAE0CbsDRHZFrD8B+NHjUuNSHmQ0sBT4U9/AIqA9Yf3bASJvRqyf7ln7cgqJycrcVXIQmJSQsbYbOv4BzitZ2wb8b6zdDLTGkhjjIZGL+OzlkbrOBV4H/ga2Aq9FFHjHA2s9tieQgJUBErksoHGY6rEpLyQJ2yKIrGsMBy4G9hv2ZDdPT1Vm+bUrvzSARF/ga4+92517B2udt1fbCLMnei+CyMIGEJnssfVWRAVu9kS3lJCQavPKOpO4CNhn2NoGnGnc3xV7wD4RIPFoDa7zlGYwKfYe1u8EZwOvGtnyLo+uqB3JMV4XdOkp3ampOXQS36tKN2m/8rNmm2uA54wXIyf3dQUdVxdS7zsBW3mM/BeKkSq4FPgtIrYs6dWTfqDq6gPcX3WgUAvaDZ+tIpKBpgAncgTQoqnY93D/Ag94WlSfyL2ScBqKNi3mvtC6xyqxiw3UFYX4eczTaIV6ltZGEOhIeAhJpdd7aq8FnkmIJUvrSeIRrXpTfH1cRA/+baQu15Xn6M5KXM6N7dmtYVhWEhPykDGQ7HSfnis+fWucNfOMe16J2YkUEhuB4aTjVOAZT/9xc+G+4/Rscu/ZXzhYzZhIcaeOKtWpg+E6Lsp1vuFcr0QkpifJNGs9rm5SL9yqVfBZxrUXjWd4yafoskgS3yV0iqmYDUw0vu8HvKDDi90a+N5gn1ZCYIuWEN7trBFSWffoZPHOWhR94iHwjZ7SMvnz4Qzg+xom9H2ctNxdy65v9BCRVBlC/0KH91VF2w8adj+tqMvsmTMtmWXy50uhq/W+3wuVbAoGqu9btm+q96hzqw6ni7gA+KEQP+5Z0qruJrsVwrKA3fmFXZc0HIUNJcH+hw7fBHcAO/T79QbJvoUaTRomH+4usdmtg7085X+uTVww7S+JSL1bnLNmFXCaoetZvS5kL/TYGxJwqaxEOkPD7EkJiuRNPeTZ7nx2K6XH2MBU8cuKJDKVFT4irQl9Q68eXnJQ5RBSM/V6T2CAIHiyRhKZym0+AzMSFa3Tlre/1kj5TtwTIDHG83NaFZEflUz0K2lhLTlQOIOkfLgxQOJ84K86kcg0ZoOTkZ0VFT8fqABatE7L6ii7KMHIQtpLlc3a05zixM/iOpPIdD5WikHG/09SZI+2pO2B38prlVkxRI6BI4DDZAKB5gNfew8AAAAASUVORK5CYII="
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Clean premises
              </h3>
              <p className="text-dark">
                Spotless, hygienic premises enhance dining experience and ensure
                safety.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADLElEQVR4nO2ZX2jOURjHPzN/xjCb/JeEVi7USksau1H+7Mqf/E9R5EIikxAXRrmQSRsSLY0boUgkygUuEKFJsZlJrMjfYWbj1alz8ev0nN97fr/3nfes7VOntt85z3Oe7/ue5znnd17ooYduSx4wF6gAbgNfgQsuhreAeuAAMIb/z3hgFXAcqAP+AAmjfXBx9Dxg0AJsBXp3cvATgX3AKyFoqV12cTodaDMMrwK5nSBgCHAMaHcUkNCt3HWC9YLxPb1e00Ux8DqigIRuJVEmOiE4uAZkp0HELL1sEzHbuCiT5eqkN50cSlFEIfAzBREdQJ+ok84QqsZfYHZMEb2AO5YAVVkt1nOGCXkTc26qBGdqbQ+O4avUEpxK9jl6zNQkQtQHEYsC4KPgsDKGr6OW4FRxUYx2KADVpMBGwWGbrv9ReCD4qdV9OcBDhxxZnooQlVyNgtOzEf28M+wbgEG676SDiC/AQFJE2ltUIZgcwUeLkRfT9PMVjhVrL2mgn64YpvNTEXw0BOwOBvJCysGE0Z7oGNJCuTDBb2Cso/0ZbfM2sKSuOIhoSvcBtsCymbl+5WV6/DL9/2IHEY9jFBUnaoTJmoG+DrZZwB7994AkpbYZ2A30p5Motky8KKKfCsP+M3AR2KYPhZGPIXF4Jgg5H8FerfdW49gzkwywSxDSGuGYf9iwvUmGmKA/RVOMekVNxiihYCwlg9wVhKhSmoxKw+aHTvyMsdOypwwNscnXgQdtVIJnlCmW6rUyxGaTMH41HtAoBHY6ZHyd8LY3DA+oFoS812+CJiXCWHWH5gULLMtLbZomtcK4LXhCvl4eZoBqnwmSY7k1mYRH3BcCvG6MmSeMeYFn7BeC/Gbcfx0RxqgbRq8os+RJUWBMk9C/EM/Is+TJBt1fJPR16Hcb73gUsp/sEPpUXnlJlRDsU913Q+hTv714yRIh2HZ9G/ld6JuPp4y0JPxm4Zk6/g/HY+qFoF8Kz9QvYl5TY/lWzKbGec0aRyHr8JxCRyFRrlgzQpY+woeJ+GQ54nvHpSRCVH+XYHsSIWvpIpSGiFCXDiPoImQD54RD5K/AIbKHbsE//RA8CRWsMVkAAAAASUVORK5CYII="
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Vegan options
              </h3>
              <p className="text-dark">
                We offer delectable vegan options to cater to diverse
                preferences.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <img
              className="img-64"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nO2Yv0oDQRCHP4Odr2CnVvYSBUmsrMS3EOyEYClYGLto7zPYmaQUKzufIKJoYxeDWglxZGGKoBv3NuTPrswH09z+7piP2bvjDgzDMAxjvGwBbaAHSGLVA1pANSRxCHwl0LAEyvVY+2sSOUjIgEzFJ9JOoDmJrKZP5DWBxiSyuj4RybR+UTg4RcREiJ+Iy3wCl8BCzhORgTrKWcSxrdlbMhdZHPGJc5OayDzQH0HkMTURx4vm3XRCnGu2kaLInebXArk54Emz5RRFmprfDeTKmntWqaIiHZ1gZ9IiF5rfD+QamjsrcE0ZqCU9tjJpkePIG309UmR5WiJ7ERLXBbaVb2u5Kd5PWmRH8+5TdFzILG72Vc0/AKWcRUr6giu6vZIVcWx4Ho9ZijhOgQ+gTtyaj5mKvOt5b5FryYnUteGTyLXkRMaJmAj51f/9QddKoDGJrCufSDWzn9h9YJMh1DKR6QMHBKjo1143gYblR3V1Ow2dhGEYhmEwAt+gscKcYrdoMwAAAABJRU5ErkJggg=="
            />
            <div>
              <h3 className="text-dark font-poppins fw-bold mb-0 fs-4">
                Online ordering
              </h3>
              <p className="text-dark">
                Convenient and fast way to order food from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*End of Feature grid */}

      {/* Video box with shadow starts here */}
      <div className="d-flex justify-content-center border-bottom mb-5">
        <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap font-poppins pb-3">
          One minute videos
        </p>
      </div>
      <div className="d-grid gap-2 mx-4 d-sm-flex justify-content-sm-center mb-5">
        <Link
          className="btn px-4 me-sm-3"
          to="https://www.youtube.com/@foodiespointbhopal"
        >
          Go to YouTube
        </Link>
        <Link className="nav-link btn px-4 font-poppins text-prime" to="/menu">
          Go to menu
        </Link>
      </div>
      <div className="d-flex my-4 justify-content-center rounded">
        <div className="border-2 shadow-lg bg-body rounded-3 video-card d-inline-flex text-black p-0 m-0">
          <video className="rounded-3 shadows-lg video" muted autoPlay loop>
            <source src={Video} /> Your browser doesnot support video tags
          </video>
          <div className="w-100">
            <div className="text-break font-poppins text-prime-gradient2 fw-bold border-bottom">
              Special ! Soya chap
            </div>
            <LinesEllipsis
              className="para-1 fs-5"
              text="Our specialty Indian dish, Soya Chap, is a testament to our commitment to high-quality ingredients and expert culinary skills. This dish is a must-try for any food enthusiast looking to experience the authentic flavors of India. Our chef's expertise in preparing Soya Chap is unrivaled, and we take great pride in showcasing this dish on our menu. Come visit us and indulge in this delicious treat that will leave your taste buds craving for more."
              maxLine="3"
              ellipsis="........"
              trimRight
              basedOn="letters"
            />
          </div>
        </div>
      </div>
      <div className="d-flex my-4 justify-content-center rounded">
        <div
          style={{}}
          className="border-2 shadow-lg bg-body rounded-3 video-card d-inline-flex text-black p-0 m-0"
        >
          <video className="rounded-3 shadows-lg video" muted autoPlay loop>
            <source src={Video2} /> Your browser doesnot support video tags
          </video>
          <div className="w-100">
            <div className="text-break font-poppins text-prime-gradient2 fw-bold border-bottom ">
              Chinese Noodles
            </div>
            {/* <p className='text-wrap para-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, saepe aliquam ipsum exercitationem rerum voluptatibus molestias consectetur fuga quidem quasi maiores delectus odio aliquid, necessitatibus qui dolorum blanditiis accusantium maxime cupiditate obcaecati eveniet eum asperiores tempore sit. Enim nostrum et eligendi dolore laudantium, animi debitis voluptas minus itaque, laboriosam repellat.</p> */}
            <LinesEllipsis
              className="para-1 fs-5"
              text="Noodles from our chinese section of the menu is a true representation of our commitment to quality ingredients and exceptional culinary skills. Prepared with our chef's expertise and passion, this dish is a must-try for anyone who loves Asian cuisine. We take pride in showcasing this specialty on our menu and invite you to visit us and savor the authentic flavors of our noodles or chowmein dish. Join us for an unforgettable culinary journey that will leave you wanting more."
              maxLine="3"
              ellipsis="........"
              trimRight
              basedOn="letters"
            />
          </div>
        </div>
      </div>
      {/* End of video box with shadow */}

      {/* Gallery Section starts here */}
      <div>
        <div className="my-5 py-5 container">
          <div className="d-flex justify-content-center border-bottom mb-3">
            <p className="text-prime-gradient fw-bolder display-5 font-poppins pb-1">
              Gallery
            </p>
          </div>
          <p className="lead text-black mb-4">
            Step into our world of culinary delight and visual appeal. Our
            gallery showcases the vibrant colors, tantalizing aromas, and
            exquisite presentations that make our restaurant a feast for the
            senses. Discover the mouth-watering dishes, inviting atmosphere, and
            friendly staff that create an unforgettable dining experience.
          </p>
          <div className="gallery-wrap">
            <div
              className="item item-1"
              style={{ backgroundImage: `url('./images/gal (1).avif')` }}
            />
            <div
              className="item item-2"
              style={{ backgroundImage: `url('./images/gal (2).avif')` }}
            />
            <div
              className="item item-5"
              style={{ backgroundImage: `url('./images/gal (3).avif')` }}
            />
            <div
              className="item item-3"
              style={{ backgroundImage: `url('./images/gal (4).avif')` }}
            />
            <div
              className="item item-4"
              style={{ backgroundImage: `url('./images/gal (5).avif')` }}
            />
          </div>
        </div>
      </div>
      {/* Gallery section ends here */}

      {/* Testimonials starts here */}
      <div className="container d-flex justify-content-center border-bottom mb-5">
        <p className="text-prime-gradient fw-bolder display-5 font-poppins pb-1">
          Testimonials
        </p>
      </div>
      <OwlCarousel
        items={1}
        className="owl-theme"
        loop
        nav
        margin={2}
        autoplay={true}
        animateIn={"animate__backInRight"}
        animateOut={"animate__backOutLeft"}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial">
                <div className="pic translate-middle-y top-50 d-flex align-items-center h-100 mx-auto">
                  <img
                    src="./images/logo.jpg"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="testimonial-content">
                  <p className="para-1 fs-5 text-dark mb-2">
                    I recently visited FoodiesPoint and was blown away by the
                    fantastic experience I had. The Soya Chap was the highlight
                    of the meal, and the flavors were spot on! The ambience was
                    cozy, and the staff was attentive, making the experience
                    even more enjoyable. The service was prompt, and I did not
                    have to wait long for my order. I was impressed with the
                    cleanliness and hygiene standards, and the overall
                    experience was delightful. I would highly recommend this
                    restaurant to anyone looking for delicious Indian cuisine
                    and a memorable dining experience.
                  </p>
                  <h3 className="testimonial-title font-poppins fs-3">
                    Sumit K.
                    <small className="post font-poppins">Customer</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial">
                <div className="pic translate-middle-y top-50 d-flex align-items-center h-100 mx-auto">
                  <img
                    src="./images/logo.jpg"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="testimonial-content">
                  <p className="para-1 fs-5 text-dark mb-2">
                    I was in the mood for noodles and decided to visit
                    FoodiesPoint. I was impressed with the quality of the
                    ingredients and the excellent service. The noodles were
                    cooked to perfection, and the flavors were spot on. The
                    staff was friendly and attentive, and the ambience was cozy
                    and inviting. The pricing was reasonable, and the portions
                    were generous. The online ordering and delivery service was
                    hassle-free and convenient. I would definitely recommend
                    this restaurant to anyone who loves Asian cuisine and is
                    looking for a great dining experience.
                  </p>
                  <h3 className="testimonial-title font-poppins fs-3">
                    Manish K.
                    <small className="post font-poppins">Customer</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial">
                <div className="pic translate-middle-y top-50 d-flex align-items-center h-100 mx-auto">
                  <img
                    src="./images/logo.jpg"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="testimonial-content">
                  <p className="para-1 fs-5 text-dark mb-2">
                    As a chef at FoodiesPoint, I take great pride in my craft,
                    and I must say it's a joy to work with high-quality
                    ingredients and a passionate team. The Soya Chap dish is one
                    of our specialties, and we take great care in preparing it
                    with perfection. We use only the best ingredients, and our
                    cooking techniques are designed to bring out the authentic
                    flavors of Indian cuisine. We take hygiene and cleanliness
                    seriously and maintain strict standards in the kitchen. It's
                    a pleasure to see our customers enjoy their meals and leave
                    satisfied, knowing that we've put our heart and soul into
                    creating a memorable dining experience.
                  </p>
                  <h3 className="testimonial-title font-poppins fs-3">
                    The Chef
                    <small className="post font-poppins">Foodies Point</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial">
                <div className="pic translate-middle-y top-50 d-flex align-items-center h-100 mx-auto">
                  <img
                    src="./images/logo.jpg"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="testimonial-content">
                  <p className="para-1 fs-5 text-dark mb-2">
                    I recently ordered catering for a family gathering from
                    FoodiesPoint, and I must say it was a hit! The food was
                    delicious, and the staff was professional and attentive to
                    detail. The Soya Chap and noodles were the crowd favorites,
                    and everyone loved the authentic flavors of the dishes. The
                    packaging was neat and hygienic, and the delivery was
                    prompt. The pricing was reasonable, and the portions were
                    ample. I would highly recommend FoodiesPoint for catering
                    and special events, and I look forward to ordering from them
                    again in the future.
                  </p>
                  <h3 className="testimonial-title font-poppins fs-3">
                    Ankit K.
                    <small className="post font-poppins">Customer</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial">
                <div className="pic translate-middle-y top-50 d-flex align-items-center h-100 mx-auto">
                  <img
                    src="./images/logo.jpg"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="testimonial-content">
                  <p className="para-1 fs-5 text-dark mb-2">
                    Working as a chef at FoodiesPoint is a fulfilling
                    experience. The team's passion for culinary excellence is
                    contagious, and we are always experimenting with new dishes
                    and flavors. Our noodles and chowmein dishes are a result of
                    our chef's expertise and dedication to quality ingredients.
                    We use traditional techniques and modern twists to create
                    dishes that are both delicious and visually appealing. The
                    kitchen is well-equipped, and we follow strict hygiene and
                    safety standards to ensure that our food is safe and healthy
                    for our customers. It's a joy to see our customers
                    appreciate our dishes and leave with happy memories.
                  </p>
                  <h3 className="testimonial-title font-poppins fs-3">
                    The Chef
                    <small className="post font-poppins">Foodies Point</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      {/* Testimonials ends here */}

      {/* Events/Catering start here */}
      <div className="container col-xxl-8 px-4 py-1">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={"./images/events.jpg"}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            {/* <p className="display-5 text-wrap py-2 fw-bolder text-black font-poppins lh-1 mb-3">Responsive left-aligned hero with image</p> */}
            <div className="d-flex justify-content-center">
              <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap font-poppins border-bottom py-2">
                Events/Catering orders are welcome
              </p>
            </div>
            <p className="lead text-black py-2 my-5">
              We offer catering and host special events. Contact us for more
              information. Celebrate your special occasions with the authentic
              flavors of our cuisine, exceptional service, and personalized
              attention to detail. Allow us to create an unforgettable culinary
              experience that will delight your guests and exceed your
              expectations.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg text-black px-4 me-md-2">Primary</button> */}
              <Link className="btn px-4 me-sm-3" to="/contact">
                Contact us
              </Link>
              <Link
                className="nav-link btn px-4 font-poppins text-prime"
                to="/menu"
              >
                Go to menu
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Events/Catering ends here */}

      {/* Reservation/Ordering start here */}
      <div className="container col-xxl-8 px-4 py-1">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-lg-6">
            {/* <p className="display-5 text-wrap py-2 fw-bolder text-black font-poppins lh-1 mb-3">Responsive left-aligned hero with image</p> */}
            <div className="d-flex justify-content-center">
              <p className="text-prime-gradient fw-bolder display-5 lh-1 text-wrap font-poppins border-bottom py-2">
                Looking for Reservation/Ordering?
              </p>
            </div>
            <p className="lead text-black py-2 my-5">
              Make a reservation or place an order online for pickup or
              delivery. We offer a hassle-free and convenient way to enjoy our
              cuisine. With just a few clicks, you can indulge in the flavors of
              our dishes from the comfort of your own home or office. We look
              forward to serving you soon!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <button type="button" className="btn btn-primary btn-lg text-black px-4 me-md-2">Primary</button> */}
              <Link className="btn px-4 me-sm-3" to="/contact">
                Contact us
              </Link>
              <Link
                className="nav-link btn px-4 font-poppins text-prime"
                to="/menu"
              >
                Go to menu
              </Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={"./images/reservation.jpg"}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Reservation/Ordering ends here */}

      {/* -------------------------- footer section start -------------------------- */}
      <Footer />
      {/* Footer ends here */}
    </>
  );
}

export default Home;

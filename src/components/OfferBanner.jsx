import React from 'react';
import "../pages/basicCss.css";
import 'tw-elements';

function OfferBanner({message,BgdColor = "bg-red-500"}) {
    return (
      // <h1>this is the aboutpage</h1>
      <section className="mb-0 offerbanner-toggler">
        <div className= {`my-2 mx-4 alert alert-dismissible fade show rounded-lg py-2 px-6 text-white md:flex justify-between items-center text-center md:text-left ${BgdColor}`}>
          <div className="md:mb-0 flex items-center flex-wrap justify-center min-w-min md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 h-4 mr-2">
              {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
              <path
                fill="currentColor"
                d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
              />
            </svg>
            <strong className="mr-1">{message.strongtext}</strong>{message.text}
          </div>
          <div className="flex items-center justify-center">
            <a
              className="inline-block px-6 py-2.5 bg-white text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out mr-4"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Claim offer
            </a>
            <a
              href=""
              className="text-white"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <svg
                className="w-4 h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
}

export default OfferBanner;
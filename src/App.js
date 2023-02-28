// import logo from './logo.svg';
import './App.css';
import 'tw-elements';

function App() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button className=" navbar-toggler  text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
          <a className="text-xl text-black" href="#">Navbar</a>
          {/* ------------------------------- Left Links ------------------------------- */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li className="nav-item px-2">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Features</a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Pricing</a>
            </li>
            <li className="nav-item pr-2">
              <a className="nav-link disabled text-gray-300 p-0">
                Disabled
              </a>
            </li>
          </ul>
          {/* ------------------------------- Left links ------------------------------- */}
        </div>
        {/* --------------------------- Collapsible wrapper -------------------------- */}
      </div>
    </nav>
  );
}

export default App;

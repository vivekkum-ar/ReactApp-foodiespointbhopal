import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import Blog4 from "./components/Blog4";
import Blog5 from "./components/Blog5";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import NoPage from "./pages/404";
import About from "./pages/about";
// import Blog1 from './components/BlogRBar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Blogs/Blog1" element={<Blogs />} />
          <Route path="Blogs/Blog2" element={<Blog2 />} />
          <Route path="Blogs/Blog3" element={<Blog3 />} />
          <Route path="Blogs/Blog4" element={<Blog4 />} />
          <Route path="Blogs/Blog5" element={<Blog5 />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

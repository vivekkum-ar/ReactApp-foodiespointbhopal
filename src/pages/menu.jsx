import React from 'react';
import "../index.css"


function Menu() {
    return (
        // <h1>this is the Menupage</h1>
        <div className='div-body'>
        <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src="images/blog1/blog1 (1).png" />
                <img className="pic-2" src="images/blog1/blog1 (1).png" />
              </a>
              <span className="product-sale-label">sale</span>
              <ul className="product-links">
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                <li><a href="#"><i className="far fa-heart" /></a></li>
                <li><a href="#"><i className="fas fa-eye" /></a></li>
                <li><a href="#"><i className="fas fa-search" /></a></li>
              </ul>
            </div>
            <div className="product-content">
              <div className="price"><span>$79.00</span> $49.99</div>
              <h3 className="title"><a href="#">Women's Top</a></h3>
              <span className="product-category"><a href>Women's</a></span>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="far fa-star" />
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src="images/blog1/blog1 (1).png" />
                <img className="pic-2" src="images/blog1/blog1 (1).png" />
              </a>
              <ul className="product-links">
                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                <li><a href="#"><i className="far fa-heart" /></a></li>
                <li><a href="#"><i className="fas fa-eye" /></a></li>
                <li><a href="#"><i className="fas fa-search" /></a></li>
              </ul>
            </div>
            <div className="product-content">
              <div className="price"> $39.99</div>
              <h3 className="title"><a href="#">Women's Top</a></h3>
              <span className="product-category"><a href>Women's</a></span>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="far fa-star" />
                <li className="far fa-star" />
              </ul>
            </div>
          </div>
        </div>
      </div>
        <img src='/images/body.png' className='newsize'/>
        </div>

    );
}

export default Menu;
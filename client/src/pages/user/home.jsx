import React from "react";
import ProductCard from "../../pages/user/productCard";
import HeaderPage from "../../components/user/HeaderPage";
import { FaArrowCircleDown } from "react-icons/fa";
import image1 from "../../assets/images/homePageImage/home-page-img1.jpg";
import countdownImage from "../../assets/images/homePageImage/countdown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../pages/user/Footer";
import { faShoppingBag, faStar, faPercent } from "@fortawesome/free-solid-svg-icons";
import FeaturedItems from "./featuredItems";
import "../../styles/user/featuredItem.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Highlight } from "../../components/user/homePageCarousels";
// import Cookies from "js-cookie";
//import products from "./productList";

const ProductGrid = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState("Top Order");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // const cookie = Cookies.get("LoginToken");
  // console.log(cookie);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/get-productDetails`)
      .then((response) => {
        setProductDetails(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [setProductDetails]);

  // productDetails.map((product) => {
  //   console.log(product);
  // });
  return (
    <>
      <HeaderPage />
      <Highlight />
      {/* <Foods /> */}
      <div className="product-container">
        <div className="productTitle">Recently Sold Items</div>
        <div className="product-grid">
          {productDetails.map((product) => (
            <ProductCard
              key={product._id}
              imgSrc={product.image}
              imageSlider={product.imageSlider}
              rating={product.rating}
              productName={product.productName}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              setNew={product.newProduct}
              setSale={product.sale}
              discountPercentage={product.discountPercentage}
              productDetails={product.productDescription}
            />
          ))}
        </div>
        <div className="showMoreButton">
          <button className="show-more-button">
            <FaArrowCircleDown className="showmore-icon" />
            SHOW MORE
          </button>
        </div>
        <div className="homePage-imageBox">
          <img src={image1} alt="product" className="homepage-image-1" />
        </div>
        <div className="productTitle">Our Featured Items</div>
        <div className="featuredItem-grid">
          {products.map(
            (product) =>
              product.featuredItems && (
                <FeaturedItems
                  key={product.id}
                  imgSrc={product.imgSrc}
                  imageSlider={product.imageSlider}
                  rating={product.rating}
                  productName={product.productName}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  setNew={product.setNew}
                  setSale={product.setSale}
                  discountPercentage={product.discountPercentage}
                  productDetails={product.productDetails}
                />
              )
          )}
        </div>
        <div className="showMoreButton">
          <button className="show-more-button">
            <FaArrowCircleDown className="showmore-icon" />
            SHOW MORE
          </button>
        </div>
        <div className="specialDiscount">
          <div className="discountContent">
            <h1>SPECIAL DISCOUNT OFFER FOR VEGETABLE ITEMS</h1>
            <p>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minima</p>
            <div className="countdown specialdiscount">
              <div className="days">
                <span className="countdown-time">
                  00
                  <span>:</span>
                </span>
                <p>days</p>
              </div>

              <div className="hours">
                <span className="countdown-time">
                  00
                  <span>:</span>
                </span>
                <p>hours</p>
              </div>

              <div className="minutes">
                <span className="countdown-time">
                  00
                  <span>:</span>
                </span>
                <p>minutes</p>
              </div>

              <div className="seconds">
                <span className="countdown-time">00</span>
                <p>seconds</p>
              </div>
            </div>
            <div className="showNowButton">
              <button className="show-now-button">
                <FontAwesomeIcon icon={faShoppingBag} className="shop-icon" />
                SHOW NOW
              </button>
            </div>
          </div>
          <div className="discountImage">
            <div className="discount-percent">
              <h1>20%</h1>
              <h1>OFF</h1>
            </div>
            <img src={countdownImage} alt="product" className="countdownImage" />
          </div>
        </div>
        <div className="productTitle">Collected New Items</div>
        <div className="product-grid">
          {products.map(
            (product) =>
              product.setNew && (
                <ProductCard
                  key={product.id}
                  imgSrc={product.imgSrc}
                  imageSlider={product.imageSlider}
                  rating={product.rating}
                  productName={product.productName}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  setNew={product.setNew}
                  setSale={product.setSale}
                  discountPercentage={product.discountPercentage}
                  productDetails={product.productDetails}
                />
              )
          )}
        </div>
        <div className="showMoreButton">
          <button className="show-more-button">
            <FaArrowCircleDown className="showmore-icon" />
            SHOW MORE
          </button>
        </div>
        <div className="homePage-imageBox">
          <img src={image1} alt="product" className="homepage-image-1" />
        </div>
        <div className="productTitle">Browse By Top Niche</div>
        <div className="topNiche-card">
          <ul className="topNiche-list">
            <li className={`item-1 ${selectedOption === "Top Order" ? "active" : ""}`} onClick={() => handleOptionClick("Top Order")}>
              <FontAwesomeIcon icon={faShoppingBag} />
              TOP ORDER
            </li>
            <li className={`item-2 ${selectedOption === "Top Rating" ? "active" : ""}`} onClick={() => handleOptionClick("Top Rating")}>
              <FontAwesomeIcon icon={faStar} />
              TOP RATING
            </li>
            <li className={`item-3 ${selectedOption === "Top Discount" ? "active" : ""}`} onClick={() => handleOptionClick("Top Discount")}>
              <FontAwesomeIcon icon={faPercent} />
              TOP DISCOUNT
            </li>
          </ul>
        </div>
        <div className="topNiche">
          {selectedOption === "Top Order" && (
            <div className="product-grid">
              {products.map(
                (product) =>
                  product.setNew && (
                    <ProductCard
                      key={product.id}
                      imgSrc={product.imgSrc}
                      imageSlider={product.imageSlider}
                      rating={product.rating}
                      productName={product.productName}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      setNew={product.setNew}
                      setSale={product.setSale}
                      discountPercentage={product.discountPercentage}
                      productDetails={product.productDetails}
                    />
                  )
              )}
            </div>
          )}

          {selectedOption === "Top Rating" && (
            <div className="featuredItem-grid">
              {products.map(
                (product) =>
                  product.featuredItems && (
                    <FeaturedItems
                      key={product.id}
                      imgSrc={product.imgSrc}
                      imageSlider={product.imageSlider}
                      rating={product.rating}
                      productName={product.productName}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      setNew={product.setNew}
                      setSale={product.setSale}
                      discountPercentage={product.discountPercentage}
                      productDetails={product.productDetails}
                    />
                  )
              )}
            </div>
          )}
          {selectedOption === "Top Discount" && (
            <div className="product-grid">
              {products.map(
                (product) =>
                  product.setNew && (
                    <ProductCard
                      key={product.id}
                      imgSrc={product.imgSrc}
                      imageSlider={product.imageSlider}
                      rating={product.rating}
                      productName={product.productName}
                      oldPrice={product.oldPrice}
                      newPrice={product.newPrice}
                      setNew={product.setNew}
                      setSale={product.setSale}
                      discountPercentage={product.discountPercentage}
                      productDetails={product.productDetails}
                    />
                  )
              )}
            </div>
          )}
        </div>
        <div className="showMoreButton">
          <button className="show-more-button">
            <FaArrowCircleDown className="showmore-icon" />
            SHOW MORE
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductGrid;

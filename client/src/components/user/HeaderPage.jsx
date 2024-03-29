import React from "react";
import "../../styles/user/headerPage.css";
import image from "../../assets/images/logo.png";
import profile from "../../assets/images/homePageImage/profile.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
// import { FiChevronDown } from "react-icons/fi";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import products from "../../pages/user/productList";
import Cookies from "js-cookie";

const HeaderPage = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const naviagteWhislist = () => {
    navigate("/wishlist");
  };

  const navigateCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;
      setIsFixed(currentScrollY > scrollThreshold || currentScrollY < prevScrollY);
      if (currentScrollY === 0) {
        setIsFixed(false);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleCardSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const logout = () => {
    Cookies.remove("LoginToken");
    window.location.reload();
  };

  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <p>Welcome to Ecomart in Your Dream Online Store!</p>
          <div className="right-span">
            <Link to="/offers">
              <span className="need-help">Offers</span>
            </Link>

            <Link to="/faq">
              <span className="need-help">Need Help</span>
            </Link>

            <Link to="/us">
              <span className="contact-us">Contact Us</span>
            </Link>
          </div>
        </div>
        <div
          className={`header-card-top ${isFixed ? "fixed" : ""}`}
          ref={cardRef}
          // style={{ zIndex: 3 }}
        >
          <div className="alignItem">
            <Link to="/">
              <div className="alignMyAccount">
                <img src={profile} alt=""></img>
              </div>
            </Link>
            <div className="alignlogo" onClick={() => navigate("/")}>
              <img src={image} alt="Greeny" />
            </div>
            <div className="alignSearch-icon">
              <IoIosSearch className="align-search" />
            </div>
          </div>
          <div className="logo">
            <img src={image} alt="" className="logo" onClick={() => navigate("/")} />
          </div>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="myAccount">
              <img src={profile} alt="" className="profile-logo" />
              <p className="join">Join</p>
            </div>
          </Link>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <span className="search-icon">
              <IoIosSearch />
            </span>
          </div>
          <div className="card-container">
            <div className="cart-icon" onClick={naviagteWhislist}>
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </div>
            <div className="pop-up-item">
              <p>9+</p>
            </div>
          </div>
          <div className="card-container">
            <div className="cart-icon" onClick={toggleCardSidebar}>
              <FontAwesomeIcon icon={faShoppingBag} className="card-svg" />
            </div>
            <div className="pop-up-item">
              <p>9+</p>
            </div>
          </div>
          <div className="price">
            <p>TOTAL PRICE</p>
            <h6>$345.00</h6>
          </div>
        </div>

        <div className={`offcanvas offcanvas-end ${isSidebarOpen ? "show" : ""}`} tabIndex="-1" id="shoppingCartOffcanvas" aria-labelledby="shoppingCartOffcanvasLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="shoppingCartOffcanvasLabel">
              <FontAwesomeIcon icon={faShoppingBag} className="card-svg" /> Total Item (5)
            </h5>
            <button type="button" className="btn-close text-reset" onClick={toggleCardSidebar}></button>
          </div>
          <div className="offcanvas-body">
            <div className="offcanvas-grid">
              {products.map((product) => (
                <div className="offcanvas-card">
                  <div className="offcanvas-img">
                    <img src={product.imgSrc} alt="product" className="offcanvas-prod-img" />
                    <div className="overlay">
                      <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                    </div>
                  </div>
                  <div className="offcanvas-content">
                    <h6>{product.productName}</h6>
                    <p>Unit Price {product.newPrice}</p>
                    <div className="card-item-selector">
                      <button className="selector-button" onClick={handleDecrement}>
                        -
                      </button>
                      <span className="selector-value">{quantity}</span>
                      <button className="selector-button" onClick={handleIncrement}>
                        +
                      </button>
                      <p>${product.newPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <span>Do you have a coupon code?</span>
            <div className="offcanvas-border" onClick={navigateCheckout}>
              <p>Proceed To Checkout</p>
              <p className="hrLine"></p>
              <p>456.90</p>
            </div>
          </div>
        </div>

        {/* Optional: Overlay for background dimming */}
        {isSidebarOpen && <div className="offcanvas-backdrop show" onClick={toggleCardSidebar}></div>}
        <div className="header-card-bottom">
          <div className="list-item">
            <ul>
              <li>
                <Link to="/">
                  Home
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  Shop
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/myWallet">
                  Wallet
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/myProfile">
                  Profile
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/offers">
                  Offers
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/comingSoon">
                  Coming Soon
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link to="/aboutus">
                  About Us
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
              <li>
                <Link onClick={logout}>
                  LogOut
                  {/* <FiChevronDown /> */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-details">
            <div className="header-contact-item">
              <FaPhone className="header-icon" />
              <div className="phone">
                <p>Call Us</p>
                <span>(+880) 183 828 8389</span>
              </div>
            </div>
            <div className="header-contact-item">
              <FaEnvelope className="header-icon" />
              <div className="email">
                <p>Email Us</p>
                <span>support@example.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-card">
          <div className="icon-container">
            <FaHome onClick={() => navigate("/")} />
            <span>Home</span>
          </div>
          <div className="icon-container">
            <BiSolidCategory />
            <span>Category</span>
          </div>
          <div className="icon-container wishlist">
            <FontAwesomeIcon icon={faHeart} className="heart-icon" onClick={naviagteWhislist} />
            <span>Wishlist</span>
            <div className="pop-up-cart">
              <p>9+</p>
            </div>
          </div>
          <div className="icon-container cart">
            <FontAwesomeIcon icon={faShoppingBag} onClick={toggleCardSidebar} />
            <span>Cart</span>
            <div className="pop-up-cart">
              <p>9+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;

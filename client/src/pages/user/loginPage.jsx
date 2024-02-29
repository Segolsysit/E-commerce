import Header from "../../components/user/Header";
import Footer from "../../components/user/AuthenticFooter";
import "../../styles/user/login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginCmp = () => {

  const url = "http://localhost:8000";

  const nav = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    loader: false
  });

  const [error, setError] = useState({
    email: { status: false, message: "" },
    password: { status: false, message: "" }
  });

  const [disable, setDisable] = useState(false);

  const handleUserDataSubmit = (event) => {
    event.preventDefault();

    let email = userData.email;
    let password = userData.password;


    if (email === "") {
      setError({ ...error, email: { status: true, message: "Email is required !" } });
    }
    else if (password === "") {
      setError({ ...error, password: { status: true, message: "Password is required !" } });
    }
    else {
      const handlePost = {
        email: userData.email,
        password: userData.password
      }
      console.log(handlePost)
      setUserData({ ...userData, loader: true });
      axios.post(`${url}/login/loginUser`, handlePost).then((res) => {
        console.log(res.data);
        console.log(res.headers.authorization);
        console.log(res.headers['x-access-token']);
        setDisable(true);
      }).catch((error) => {
        console.log(error);
      });
    }
    // else {
    //   const handlePost = {
    //     email: userData.email,
    //     password: userData.password
    //   }
    //   console.log(handlePost)
    //   setUserData({ ...userData, loader: true });
    //   axios.post(`${url}/login/loginUser`, handlePost).then((res) => {
    //     console.log(res.data);
    //     if (res.data) {
    //       setUserData({
    //         userName: "",
    //         email: ""
    //       });
    //       setUserData({ ...userData, loader: false });
    //       setDisable(true);
    //       toast.success("Login Successfull !", {
    //         autoClose: 2000,
    //         onClose: () => {
    //           setTimeout(() => {
    //             nav("/")
    //           }, 200);
    //         }
    //       });
    //     }
    //   }).catch((error) => {
    //     console.log(error)
    //     const dataError = error.response.status;
    //     console.log(dataError);
    //     if (dataError === 500) {
    //       console.log("User already exists one");
    //       setUserData({ ...userData, loader: false });
    //       toast.error("User Already Exist!");
    //     }
    //     else {
    //       toast.error("Internal Server Error!");
    //     }
    //   });
    // }
  }

  return (
    <div className="Authentic-container">
      <Header />
      <div className="card-login">
      <ToastContainer />
        <div className="Register-content">
          <div className="Register-content-heading">
            <h2>Welcome!</h2>
          </div>
          <p>Use Your Credentials To Access</p>
        </div>

        <div className="Register-row">
          <div className="Register-icons">
            <div className="socialBox" id="fb">
              <i className="fab fa-facebook socialIcon fb"></i>
              <p>Join With Facebook</p>
            </div>
            <div className="socialBox" id="tw">
              <i className="fab fa-twitter socialIcon tw"></i>
              <p>Join With Twitter</p>
            </div>
            <div className="socialBox" id="gl">
              <i className="fab fa-google socialIcon gl"></i>
              <p>Join With Google</p>
            </div>
            <div className="socialBox" id="ig">
              <i className="fab fa-instagram socialIcon ig"></i>
              <p>Join With Instagram</p>
            </div>
          </div>
          <div className="verticalLine">
            <div className="circle">
              <p>or</p>
            </div>
          </div>
          <div className="Register-form">
            <form onSubmit={handleUserDataSubmit}>
              <input type="email" placeholder="Enter your Email" name="email" value={userData.email} onChange={(event)=>{
                  setUserData({...userData, email:event.target.value});
                  setError({...error, email:""});
              }} />

              {error.email.status === true ? (
                <div className="form_error">
                  <div>
                    <FaStar id="form_error_icon" />
                  </div>
                  <div>
                    <span style={{ marginLeft: "5px" }}>{error.email.message}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={userData.password} onChange={(event)=>{
                  setUserData({...userData, password:event.target.value});
                  setError({...error, password:""});
              }}
              />

              {error.password.status === true ? (
                <div className="form_error">
                  <div>
                    <FaStar id="form_error_icon" />
                  </div>
                  <div>
                    <span style={{ marginLeft: "5px" }}>{error.password.message}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="header-terms">
                <input type="checkbox" id="header-terms" name="terms" />
                <label htmlFor="terms">Remember me</label>
              </div>

              
							{userData.loader === true ? (
								<div className="spinner_overview">
									<div className="spinner">
										<div className="spinner-border text-primary" id="spinner_d_flex" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									</div>
								</div>
							) : (
								""
							)}


              <button type="submit" id={disable ? "register_form_btn" : ""} disabled={disable}>LOGIN</button>
              <div className="resetHere">
                <p>
                  Forgot your password ?
                  <Link to="/resetPassword" id="link">
                    Reset Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Register-card-bottom">
        <div className="bottom-content">
          <p>
            Don't Have Any Account?
            <Link to="/register" id="link">
              Register Here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginCmp;

import React, { useState, useRef } from "react";
import _ from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import FutureImage from "next/future/image";
import { validateemail } from "../../utils/validation";
import Header from "../../components/layouts/loginHeader";
import LoginRight from "../../images/login-rightimg.png";
import LoginSMS from "../../images/login-sms.svg";
import LoginGoogle from "../../images/Google-loginlogo.svg";
import LoginFacebook from "../../images/Facebook-loginlogo.svg";
import PasswordLock from "../../images/password-lock.svg";
import PasswordEye from "../../images/password-eye.svg";

export default function Login() {
  const router = useRouter();
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = () => {
    let value = inputEmail.current.value;
    if (validateemail(value)) {
      setEmail(value);
      setError("");
    } else {
      setError("Please enter a valid email");
    }
  };

  const onLogin = () => {
    router.push("/client/signup/form");
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="wraper">
        <section className="login-section position-relative">
          <div className="login-img d-none d-md-block">
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-md-5 order-sm-2 pr-0 h-100">
                  <FutureImage src={LoginRight} className="loginbg" alt="" />
                </div>
                <div className="col-md-7 order-sm-1"></div>
              </div>
            </div>
          </div>

          <div className="container min-heighvh position-relative">
            <div className="row pt-4">
              <div className="col-md-6 mt-2 pt-5 mt-sm-5 position-inherit">
                <h1>login</h1>
                <h2>
                  to <span>protocall</span>
                </h2>

                <div className="row mt-1 mt-sm-4">
                  <div className="col-md-9 mt-3">
                    <div className="form-group position-relative">
                      <FutureImage
                        src={LoginSMS}
                        className="login-smsimg"
                        alt=""
                      />
                      <input
                        ref={inputEmail}
                        type="email"
                        className="form-control login-input"
                        placeholder="Email address"
                        onChange={onEmailChange}
                      />
                    </div>
                    {!_.isEmpty(error) && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {error}
                      </div>
                    )}
                    {_.isEmpty(error) && !_.isEmpty(email) && (
                      <div className="form-group position-relative">
                        <FutureImage
                          src={PasswordLock}
                          className="login-smsimg"
                          alt=""
                        />
                        <input
                          type="password"
                          className="form-control login-input"
                          placeholder="Password"
                        />
                        <FutureImage
                          src={PasswordEye}
                          className="paswd-eyes"
                          alt=""
                          onClick={() => {}}
                        />
                      </div>
                    )}

                    <div className="row mt-3 mt-sm-4">
                      <div className="col-md-7 col-7">
                        <button
                          type="button"
                          // disabled={!_.isEmpty(error) || _.isEmpty(email)}
                          className="btn btn-login"
                          onClick={onLogin}
                        >
                          CONTINUE WITH EMAIL
                        </button>
                      </div>
                      <div className="col-md-5 text-right col-5">
                        <p>
                          <a href="#">Forgot Password ?</a>
                        </p>
                      </div>
                    </div>

                    <div className="row mt-2 align-items-center">
                      <div className="col-md-1 col-2 pr-0">
                        <h6 className="hori-line">or</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mt-sm-4">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-light continue-btn mb-3"
                    >
                      <FutureImage
                        src={LoginGoogle}
                        height="22"
                        className="mr-2"
                        alt=""
                      />{" "}
                      Continue with Google
                    </button>
                  </div>
                  <div className="col-md-6 pl-3 pl-sm-0">
                    <button
                      type="button"
                      className="btn btn-light continue-btn"
                    >
                      <FutureImage
                        src={LoginFacebook}
                        height="22"
                        className="mr-2"
                        alt=""
                      />
                      Continue with Facebook
                    </button>
                  </div>
                </div>

                <h3>© 2022. Protocall Services. All rights Reserved</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

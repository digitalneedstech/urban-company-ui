import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FutureImage from "next/future/image";
import Image from "next/image";
import clientSelector from "../../images/client-selector-right.svg";
import teamsManright from "../../images/teams-manright.png";
import teamsWomenleft from "../../images/teams-womenleft.png";
import Header from "../../components/layouts/loginHeader";

export default function Signup() {
  const [selector, setSelector] = useState("client");

  const onSelectorChange = (e) => {
    let { value } = e.currentTarget;
    setSelector(value);
  };
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <section className="client-section  position-relative">
        <div className="client-wave-left">
          <div className="login-img d-none d-md-block">
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-md-5 order-sm-2 pr-0 h-100">
                  <FutureImage
                    src={clientSelector}
                    className="loginbg"
                    alt=""
                  />
                </div>
                <div className="col-md-7 order-sm-1"></div>
              </div>
            </div>
          </div>

          <div className="container min-heighvh position-relative">
            <div className="row pt-4">
              <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
                <h1>signup</h1>
                <h2>
                  with <span>protocall as a</span>
                </h2>

                <div className="row mt-4 mt-sm-5">
                  <div className="col-md-4 mb-3">
                    <div className="client-radio">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-check mt-3 desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              checked={selector == "client"}
                              onChange={onSelectorChange}
                              value="client"
                              id="client1"
                            />
                            <label htmlFor="client1"></label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5 col-6">
                          <p>Client</p>
                          <h6>I want to post a new project</h6>
                        </div>
                        <div className="col-md-7 col-6">
                          <Image src={teamsManright} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="client-radio">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-check desgin-radio mt-3">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              checked={selector == "service-provider"}
                              onChange={onSelectorChange}
                              value="service-provider"
                              id="client2"
                            />
                            <label htmlFor="client2"></label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5  col-6">
                          <p>Service provider</p>
                          <h6>I want to bid for a project</h6>
                        </div>
                        <div className="col-md-7 col-6">
                          <Image src={teamsWomenleft} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3 mt-sm-2">
                  <div className="col-md-12">
                    {selector == "client" ? (
                      <Link href="/client/signup/form">
                        <button type="button" className="btn btn-login">
                          CONTINUE AS CLIENT
                        </button>
                      </Link>
                    ) : (
                      <Link href="/service-provider/signup/form">
                        <button type="button" className="btn btn-login">
                          CONTINUE AS SERVICE PROVIDER
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <h3>© 2022. Protocall Services. All rights Reserved</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Signup.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

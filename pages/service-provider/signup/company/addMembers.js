import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FutureImage from "next/future/image";
import Image from "next/image";
import Probuilder from "../../../../images/profilebuilder-leftimg.svg";
import Profilebuilder from "../../../../images/profile-builder2.svg";
import Profilebuilder3 from "../../../../images/profile-builder3.svg";
import Profilebuilder4 from "../../../../images/profile-builder4.svg";
import ProbuilderSearch from "../../../../images/probuilder-search.svg";
import AddSquare from "../../../../images/add-square.svg";
import ProbuilderGPS from "../../../../images/profileBuilder-gps.svg";
import ProbuilderLocation from "../../../../images/profileBuilder-location.svg";
import Header from "../../../../components/layouts/loggedInHeader";

export default function AddMembers() {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <section className="client-profile">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="client-profilehead">
                        <h1>add team member</h1>
                        <h2>step 1: basic profile</h2>
                      </div>
                      <FutureImage src={Probuilder} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <a
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#nav-home"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                headline
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#nav-profile"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                skills
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-contact-tab"
                                data-toggle="tab"
                                href="#nav-contact"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                              >
                                rate
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-last-tab"
                                data-toggle="tab"
                                href="#nav-last"
                                role="tab"
                                aria-controls="nav-last"
                                aria-selected="false"
                              >
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label htmlFor="#" className="profile-label mt-4">
                            Write a catchy headline
                          </label>
                          <div className="">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="Start typing here…"
                            />
                          </div>
                          <h4 className="text-right words-text">0/100 words</h4>

                          <div className="border-bottom mt-3 mb-3"></div>

                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="Full name here"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="Email address"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="Phone number"
                            />
                          </div>

                          <div className="row mt-2 mb-4 mb-sm-0">
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn btn-login mr-3"
                                data-target="#nav-profile"
                                data-toggle="tab"
                              >
                                NEXT STEP
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-primary post-btn"
                              >
                                SKIP & GO TO DASHBOARD
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="client-profilehead">
                        <h1>add team member</h1>
                        <h2>step 2: their category & skills</h2>
                      </div>
                      <FutureImage src={Profilebuilder} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <a
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#nav-home"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                headline
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#nav-profile"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                skills
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-contact-tab"
                                data-toggle="tab"
                                href="#nav-contact"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                              >
                                rate
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-last-tab"
                                data-toggle="tab"
                                href="#nav-last"
                                role="tab"
                                aria-controls="nav-last"
                                aria-selected="false"
                              >
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label htmlFor="#" className="profile-label mt-4">
                            Search for category
                          </label>
                          <div className="form-group position-relative">
                            <FutureImage
                              src={ProbuilderSearch}
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="email"
                              className="form-control login-input"
                              placeholder="Search category"
                            />
                          </div>
                          <div className="border-bottom mt-4"></div>

                          <label htmlFor="#" className="profile-label mt-4">
                            Search for skills
                          </label>
                          <div className="form-group position-relative">
                            <FutureImage
                              src={ProbuilderSearch}
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="email"
                              className="form-control login-input"
                              placeholder="Search category"
                            />
                          </div>
                          <h5 className="selected-probuilder">Selected</h5>
                          <h4 className=" words-text">
                            No skill has been added yet !
                          </h4>
                          <div className="border-bottom mt-4 mb-3"></div>

                          <span className="related-skills">Related skills</span>
                          <div className="row mt-2">
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn btn-info skill-btn mr-2"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mr-2"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2 mr-2"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2 mr-2"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info skill-btn mt-2"
                              >
                                Skill lorem{" "}
                                <FutureImage src={AddSquare} alt="" />
                              </button>
                            </div>
                          </div>

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn btn-outline-primary post-btn mr-3"
                                data-target="#nav-home"
                                data-toggle="tab"
                              >
                                BACK
                              </button>
                              <button
                                type="button"
                                className="btn btn-login "
                                data-target="#nav-contact"
                                data-toggle="tab"
                              >
                                NEXT STEP
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="client-profilehead">
                        <h1>add team member</h1>
                        <h2>step 3: hourly rate & communication</h2>
                      </div>
                      <FutureImage src={Profilebuilder3} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <a
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#nav-home"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                headline
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#nav-profile"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                skills
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-contact-tab"
                                data-toggle="tab"
                                href="#nav-contact"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                              >
                                rate
                              </a>
                              <a
                                className="nav-item nav-link"
                                id="nav-last-tab"
                                data-toggle="tab"
                                href="#nav-last"
                                role="tab"
                                aria-controls="nav-last"
                                aria-selected="false"
                              >
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label htmlFor="#" className="profile-label mt-4">
                            Specify your basic hourly rate
                          </label>
                          <div className="">
                            <input
                              type="email"
                              className="form-control login-input profile-inpt"
                              placeholder="$"
                            />
                          </div>

                          <label htmlFor="#" className="profile-label mt-4">
                            English level
                          </label>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client1"
                            />
                            <label htmlFor="client1" className="radio-label">
                              Any level
                            </label>
                          </div>

                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client2"
                            />
                            <label htmlFor="client2" className="radio-label">
                              Conversational or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client3"
                            />
                            <label htmlFor="client3" className="radio-label">
                              Fluent or better
                            </label>
                          </div>
                          <div className=" desgin-radio">
                            <input
                              className="with-gap"
                              type="radio"
                              name="client-selector"
                              id="client4"
                            />
                            <label htmlFor="client4" className="radio-label">
                              Native or bilingual only
                            </label>
                          </div>

                          <div className="row mt-4 mb-4">
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn btn-outline-primary post-btn mr-3"
                                data-target="#nav-profile"
                                data-toggle="tab"
                              >
                                BACK
                              </button>
                              <button
                                type="button"
                                className="btn btn-login "
                                data-target="#nav-last"
                                data-toggle="tab"
                              >
                                NEXT STEP
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-last"
                  role="tabpanel"
                  aria-labelledby="nav-last-tab"
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="client-profilehead">
                        <h1>add team member</h1>
                        <h2>step 4: location & proximity</h2>
                      </div>
                      <FutureImage src={Profilebuilder4} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <a
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#nav-home"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                              >
                                headline
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-profile-tab"
                                data-toggle="tab"
                                href="#nav-profile"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                              >
                                skills
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-contact-tab"
                                data-toggle="tab"
                                href="#nav-contact"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                              >
                                rate
                              </a>
                              <a
                                className="nav-item nav-link active"
                                id="nav-last-tab"
                                data-toggle="tab"
                                href="#nav-last"
                                role="tab"
                                aria-controls="nav-last"
                                aria-selected="false"
                              >
                                proximity
                              </a>
                            </div>
                          </nav>

                          <label
                            htmlFor="#"
                            className="profile-label mt-4 mb-0"
                          >
                            Select the locations you want to serve in
                          </label>
                          <div className="row align-items-center">
                            <div className="col-md-1 pr-0 col-1">
                              <FutureImage src={ProbuilderGPS} alt="" />
                            </div>
                            <div className="col-md-10  col-10 pl-0">
                              <span className="profile-buildergps">
                                Detect my current location
                              </span>
                            </div>
                          </div>
                          <div className="form-group position-relative mt-3">
                            <FutureImage
                              src={ProbuilderLocation}
                              className="login-smsimg"
                              alt=""
                            />
                            <input
                              type="email"
                              className="form-control login-input"
                              placeholder="Search location"
                            />
                          </div>

                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3182688614693!2d77.39455371691349!3d28.50007064897341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce86095555555%3A0x70cfc1465b1bc159!2sStaqo%20World%20Private%20Ltd!5e0!3m2!1sen!2sin!4v1649843153429!5m2!1sen!2sin"
                            className="iframecontact-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                          <h4 className="words-text">
                            Adjust proximity radius
                          </h4>

                          <input
                            id="feedback"
                            data-slider-id="ex1Slider"
                            type="text"
                            data-slider-min="0"
                            data-slider-max="20"
                            data-slider-step="1"
                            data-slider-value="10"
                          />
                          <h4 className="words-text text-center">25mi.</h4>
                        </div>
                      </div>
                      <div className="row mt-4 mb-4 ml-0 ml-sm-2 align-items-center">
                        <div className="col-md-12 pl-sm-3 pl-0">
                          <button
                            type="button"
                            className="btn btn-outline-primary post-btn mr-1 ml-0 ml-sm-5 mb-2"
                            data-target="#nav-profile"
                            data-toggle="tab"
                          >
                            BACK
                          </button>
                          <button
                            type="button"
                            className="btn btn-login mr-1 mb-2"
                            data-target="#nav-last"
                            data-toggle="tab"
                          >
                            FINISH ADDING TEAM
                          </button>
                          <button className="uploadBtn add-membrbtn mb-2">
                            ADD MORE MEMBERS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

AddMembers.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

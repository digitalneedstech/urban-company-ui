import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FutureImage from "next/future/image";

import Header from "../../../../components/layouts/loggedInHeader";
import Footer from "../../../../components/layouts/footer";
import GirlMeditation from "../../../../images/girl-meditation.svg";
import ProUserPic from "../../../../images/pro-userpic.jpg";
import ArrowDown from "../../../../images/arrow-down.svg";

export default function KYC() {
  const router = useRouter();

  const onVerify = () => {
    router.push("/service-provider/signup/individual/selector");
  };

  const onBack = () => {
    router.push("/service-provider/signup/individual/profile");
  };

  return (
    <>
      <Head>
        <title>Protocall</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <section className="service-providerFullbg">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5">
              <div className="client-profilehead">
                <h1>account verification</h1>
                <h2>complete the form for KYC verification</h2>
              </div>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <FutureImage src={GirlMeditation} alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Full name
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Describe about you
                </label>
                <textarea
                  className="form-control  login-input profile-inpt"
                  placeholder="Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error. Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error."
                  rows="4"
                ></textarea>
              </div>

              <div className="">
                <label htmlFor="#" className="profile-label">
                  Upload / browse profile image
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="profile_img.jpg"
                />
                <div className="upload-btn-wrapper">
                  <button className="uploadBtn">BROWSE</button>
                  <input type="file" />
                </div>
              </div>

              <div className="profile-content">
                <div className="row align-items-center">
                  <div className="col-md-3 col-5">
                    <FutureImage src={ProUserPic} alt="" />
                  </div>
                  <div className="col-md-3 pl-0 col-6">
                    <button type="button" className="btn btn-danger remove-btn">
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-providerfullbgBottom mb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Basic details
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="vinod@mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <label htmlFor="#" className="profile-label">
                Documents
              </label>

              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        ID proof documents{" "}
                        <span className="added-accordtext">
                          Added
                          <FutureImage
                            src={ArrowDown}
                            className="ml-2"
                            alt=""
                          />
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <input
                        type="email"
                        className="form-control login-input profile-inpt"
                        placeholder="profile_img.jpg"
                      />
                      <div className="upload-btn-wrapper">
                        <button className="uploadBtn">BROWSE</button>
                        <input type="file" />
                      </div>
                      <div className="profile-content">
                        <div className="row align-items-center">
                          <div className="col-md-3 col-5">
                            <FutureImage src={ProUserPic} alt="" />
                          </div>
                          <div className="col-md-3 pl-0 col-6">
                            <button
                              type="button"
                              className="btn btn-danger remove-btn"
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Qualifications{" "}
                        <span className="added-blackText">
                          -Not added
                          <FutureImage
                            src={ArrowDown}
                            className="ml-2"
                            alt=""
                          />
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <input
                        type="email"
                        className="form-control login-input profile-inpt"
                        placeholder="profile_img.jpg"
                      />
                      <div className="upload-btn-wrapper">
                        <button className="uploadBtn">BROWSE</button>
                        <input type="file" />
                      </div>
                      <div className="profile-content">
                        <div className="row align-items-center">
                          <div className="col-md-3 col-5">
                            <FutureImage src={ProUserPic} alt="" />
                          </div>
                          <div className="col-md-3 pl-0 col-6">
                            <button
                              type="button"
                              className="btn btn-danger remove-btn"
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Certifications{" "}
                        <span className="added-blackText">
                          -Not added
                          <FutureImage
                            src={ArrowDown}
                            className="ml-2"
                            alt=""
                          />
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <input
                        type="email"
                        className="form-control login-input profile-inpt"
                        placeholder="profile_img.jpg"
                      />
                      <div className="upload-btn-wrapper">
                        <button className="uploadBtn">BROWSE</button>
                        <input type="file" />
                      </div>
                      <div className="profile-content">
                        <div className="row align-items-center">
                          <div className="col-md-3 col-5">
                            <FutureImage src={ProUserPic} alt="" />
                          </div>
                          <div className="col-md-3 pl-0 col-6">
                            <button
                              type="button"
                              className="btn btn-danger remove-btn"
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Bank details{" "}
                        <span className="added-blackText">
                          -Not added
                          <FutureImage
                            src={ArrowDown}
                            className="ml-2"
                            alt=""
                          />
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <input
                        type="email"
                        className="form-control login-input profile-inpt"
                        placeholder="profile_img.jpg"
                      />
                      <div className="upload-btn-wrapper">
                        <button className="uploadBtn">BROWSE</button>
                        <input type="file" />
                      </div>
                      <div className="profile-content">
                        <div className="row align-items-center">
                          <div className="col-md-3 col-5">
                            <FutureImage src={ProUserPic} alt="" />
                          </div>
                          <div className="col-md-3 pl-0 col-6">
                            <button
                              type="button"
                              className="btn btn-danger remove-btn"
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-login mr-3"
                    onClick={onVerify}
                  >
                    VERIFY MY ACCOUNT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary post-btn "
                    onClick={onBack}
                  >
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

KYC.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
};

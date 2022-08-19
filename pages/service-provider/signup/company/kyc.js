import React from "react";
import Accordion from "react-bootstrap/Accordion";
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

  const onAddMembers = () => {
    router.push("/service-provider/signup/company/addMembers");
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
            <div className="col-md-8 mt-2 pt-5 mt-sm-5">
              <div className="client-profilehead">
                <h1>account verification</h1>
                <h2>complete the form for KYC verification</h2>
              </div>
            </div>
            <div className="col-md-4 text-right mt-2 pt-5 mt-sm-5  d-none d-sm-block">
              <button
                type="button"
                className="btn btn-login"
                onClick={onAddMembers}
              >
                ADD TEAM MEMBER(S)
              </button>
            </div>
          </div>

          <div className="row mt-4 align-items-end">
            <div className="col-md-3">
              <FutureImage src={GirlMeditation} alt="" />
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Full company name
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Describe your company
                </label>
                <textarea
                  className="form-control  login-input profile-inpt"
                  placeholder="Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error. Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis dignissimos ut non enim error."
                  rows="4"
                ></textarea>
              </div>

              <div className="">
                <label htmlFor="#" className="profile-label">
                  Upload / browse logo
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="logo.png"
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
                  Website link (optional)
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="https://mocklabs.com"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="+00 9876543210"
                />
              </div>

              <div className="form-group">
                <label htmlFor="#" className="profile-label">
                  Admin details
                </label>
                <input
                  type="email"
                  className="form-control login-input profile-inpt"
                  placeholder="Vinod Sharma"
                />
              </div>
              <div className="form-group">
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

              <label htmlFor="#" className="profile-label mb-2">
                Company documents
              </label>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Company registration certificate{" "}
                    <span className="added-accordtext">Added</span>
                  </Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Company bank details{" "}
                    <span className="added-blackText">-Not added</span>
                  </Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Other Documents{" "}
                    <span className="added-blackText">-Not added</span>
                  </Accordion.Header>
                  <Accordion.Body>
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="row mt-4">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-login mr-3 "
                    onClick={onAddMembers}
                  >
                    ADD TEAM MEMBER(S)
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

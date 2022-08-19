import dynamic from "next/dynamic";
import Image from "next/image";
import FutureImage from "next/future/image";
import ProtocallLeft from "../../images/protocallleft-img.png";
import SecLogo from "../../images/sec-logo.svg";
import ArrowRight from "../../images/service-arrowright.svg";
import WaveTop from "../../images/wave-topProtocall.svg";
import WaveBottom from "../../images/wave-bottomProtocall.svg";
import PuzzlePieces from "../../images/puzzle-pieces2.png";
import SecurityImg from "../../images/security.svg";
import UserTag from "../../images/user-tag.svg";
import UserTick from "../../images/user-tick.svg";
import ProjectLeft from "../../images/project-left.png";
import ProjectRight from "../../images/project-girlRight.png";

import AmazonLogo from "../../images/amazon-logo.svg";
import AirbusLogo from "../../images/airbus-logo.svg";
import DeloitteLogo from "../../images/deloitte-logo.svg";
import GoogleLogo from "../../images/google-logo.svg";
import FacebookLogo from "../../images/facebook-logo.svg";
import IbmLogo from "../../images/Ibm-logo.svg";

import Comma from "../../images/comma.svg";
import YoungMan from "../../images/Young-Man2.png";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

export default function HomeAncillary() {
  return (
    <>
      <section className="py-4 py-sm-5 protocall-section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-end">
            <div className="col-md-6 pl-0 mb-3">
              <Image src={ProtocallLeft} alt="" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="service-head">
                    <Image src={SecLogo} className="mb-2" alt="" />
                    <h1>
                      why <span>protocall ?</span>
                    </h1>
                    <h2>
                      <span>
                        <a href="#">read more about us</a>
                      </span>{" "}
                      <Image src={ArrowRight} alt="" />
                    </h2>
                    <p className="mt-2 mt-sm-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button
                      type="button"
                      className="btn btn-login mt-0 mt-sm-1"
                    >
                      READ MORE ABOUT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="top-waveprotocall">
        <Image src={WaveTop} alt="" />
      </div>
      <section className="protocall-secbg">
        <div className="protocall-secbg-wave">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6">
                    <Image src={PuzzlePieces} alt="" />
                  </div>
                </div>
                <div className="row mt-4 mt-sm-5">
                  <div className="col-md-6 mb-4">
                    <div className="service-head">
                      <Image src={SecLogo} className="mb-2" alt="" />
                      <h1>
                        how <span>protocall works?</span>
                      </h1>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h6>
                      <h5>
                        Over <span>9k+</span> members
                      </h5>
                      <button
                        type="button"
                        className="btn btn-warning exlpore-btn mt-2 mt-sm-3"
                      >
                        EXPLORE THE COMMUNITY
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <Image src={SecurityImg} alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Signup with protocall</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <Image src={UserTag} alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Explore the community</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-3 col-4">
                        <div className="member-leftsecimg">
                          <Image src={UserTick} alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 pl-0 col-8">
                        <div className="member-secRight">
                          <div className="member-secborder"></div>
                          <h6>Hire a suitable service provider</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
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
      <div className="bottom-waveprotocall">
        <Image src={WaveBottom} alt="" />
      </div>

      <section className="position-relative py-4 py-sm-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src={ProjectLeft} className="Image-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="top-bannerHead">
                    <h1>
                      post a<span> project</span>
                    </h1>
                    <h2>in less than a minute</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button
                      type="button"
                      className="btn btn-login mt-0 mt-sm-2"
                    >
                      POST A PROJECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rating-point mt-4">
            <div
              className="row justify-content-center"
              style={{ position: "relative" }}
            >
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-4 col-4 text-center">
                    <h1>9k+</h1>
                    <p>
                      community <br /> members
                    </p>
                  </div>
                  <div className="col-md-4 col-4 text-center">
                    <h1>12k+</h1>
                    <p>
                      service <br /> categories
                    </p>
                  </div>
                  <div className="col-md-4 col-4 text-center">
                    <h1>20m+</h1>
                    <p>
                      Projects <br /> completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FutureImage
          src={ProjectRight}
          width="330"
          className="project-rightGirl d-none d-sm-block"
          alt=""
        />
      </section>

      <section className="py-4 py-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="service-head ">
                <Image src={SecLogo} className="mb-2" alt="" />
                <h1>
                  protocall <span>trusted by</span>
                </h1>
                <h2>
                  <span>
                    <a href="#">view more clients</a>
                  </span>{" "}
                  <Image src={ArrowRight} alt="" />
                </h2>
                <span className="logo-Image">
                  <Image src={AmazonLogo} height="23" alt="" />
                  <Image src={AirbusLogo} height="18" alt="" />
                  <Image src={DeloitteLogo} height="18" alt="" />
                  <Image src={GoogleLogo} height="25" alt="" /> <br />{" "}
                  <FutureImage
                    src={FacebookLogo}
                    height="18"
                    className="mt-3"
                    alt=""
                  />
                  <FutureImage
                    src={IbmLogo}
                    className="mt-3"
                    height="24"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="trusted-manSec">
                <OwlCarousel
                  className="threeCollection"
                  center={false}
                  items={1}
                  loop={true}
                  margin={20}
                  nav={false}
                  //autoplay={true}
                  dots={true}
                  navText={[
                    '<span class="icon-arrow_back">',
                    '<span class="icon-arrow_forward">',
                  ]}
                  responsive={{
                    600: {
                      margin: 20,
                      items: 1,
                      loop: false,
                    },
                    1000: {
                      margin: 20,
                      items: 1,
                      loop: false,
                    },
                    1200: {
                      margin: 20,
                      items: 1,
                      loop: false,
                    },
                  }}
                >
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <FutureImage
                                  src={Comma}
                                  className="comma-img mb-2"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                            <h2>Alan Keech</h2>
                            <p>Senior project manager for Example company</p>
                            <h5>
                              <a href="#">Read more</a>
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <div className="young-manSec">
                              <Image
                                src={YoungMan}
                                className="young-manimg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <FutureImage
                                  src={Comma}
                                  className="comma-img mb-2"
                                  alt=""
                                />
                              </div>
                            </div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                            <h2>Alan Keech</h2>
                            <p>Senior project manager for Example company</p>

                            <h5>
                              <a href="#">Read more</a>
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <div className="young-manSec">
                              <Image
                                src={YoungMan}
                                className="young-manimg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <FutureImage
                                  src={Comma}
                                  className="comma-img mb-2"
                                  alt=""
                                />
                              </div>
                            </div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                            <h2>Alan Keech</h2>
                            <p>Senior project manager for Example company</p>

                            <h5>
                              <a href="#">Read more</a>
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <div className="young-manSec">
                              <Image
                                src={YoungMan}
                                className="young-manimg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-3">
                                <FutureImage
                                  src={Comma}
                                  className="comma-img mb-2"
                                  alt=""
                                />
                              </div>
                            </div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                            <h2>Alan Keech</h2>
                            <p>Senior project manager for Example company</p>

                            <h5>
                              <a href="#">Read more</a>
                            </h5>
                          </div>
                          <div className="col-md-6">
                            <div className="young-manSec">
                              <Image
                                src={YoungMan}
                                className="young-manimg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

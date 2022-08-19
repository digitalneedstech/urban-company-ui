import React from "react";
import dynamic from "next/dynamic";

import Image from "next/future/image";
import SecLogo from "../../images/sec-logo.svg";
import ArrowRight from "../../images/service-arrowright.svg";
import HomeAC from "../../images/Home-ac.svg";
import HomePaint from "../../images/Home-paint.svg";
import AwesomeHome from "../../images/awesome-home.svg";
import SprayCan from "../../images/spray-can.svg";
import MaterialTv from "../../images/material-tv.svg";
import Hammer from "../../images/hammer.svg";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});

export default function ServiceCarousel() {
  return (
    <>
      <section className="py-4 py-sm-5 service-providerSec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-head">
                <Image src={SecLogo} className="mb-2" alt="" />
                <h1>
                  service <span>provider</span>
                </h1>
                <h2>
                  trending categories{" "}
                  <span className="ml-2">
                    <a href="#">view all</a>
                  </span>{" "}
                  <Image src={ArrowRight} alt="" />
                </h2>
              </div>
            </div>
          </div>

          <div className="row mt-3 mt-sm-5">
            <div className="col-md-12">
              <OwlCarousel
                className="oneCollection"
                center={false}
                items={2}
                loop
                margin={20}
                nav={false}
                autoplay={true}
                dots={true}
                navText={[
                  '<span class="fa fa-angle-left">',
                  '<span class="fa fa-angle-right">',
                ]}
                responsive={{
                  600: {
                    margin: 20,
                    items: 3,
                  },
                  1000: {
                    margin: 20,
                    items: 6,
                  },
                  1200: {
                    margin: 20,
                    items: 6,
                  },
                }}
              >
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={HomeAC} className="mt-2" alt="" />
                    <h2>AC Repair</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={HomePaint} className="mt-2" alt="" />
                    <h2>Home Painting</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={AwesomeHome} className="mt-2" alt="" />
                    <h2>Cleaning Services</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={SprayCan} className="mt-2" alt="" />
                    <h2>Disinfections</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={MaterialTv} className="mt-2" alt="" />
                    <h2>Appliances Repair</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={Hammer} className="mt-2" alt="" />
                    <h2>Carpentry</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={HomeAC} className="mt-2" alt="" />
                    <h2>AC Repair</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={HomePaint} className="mt-2" alt="" />
                    <h2>Home Painting</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={AwesomeHome} className="mt-2" alt="" />
                    <h2>Cleaning Services</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={SprayCan} className="mt-2" alt="" />
                    <h2>Disinfections</h2>
                  </div>
                </div>

                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={MaterialTv} className="mt-2" alt="" />
                    <h2>Appliances Repair</h2>
                  </div>
                </div>
                <div className="item">
                  <div className="service-box">
                    <p>
                      {" "}
                      <span>+45%</span> since last week
                    </p>
                    <Image src={Hammer} className="mt-2" alt="" />
                    <h2>Carpentry</h2>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

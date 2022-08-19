import Image from "next/future/image";
import TopLogo from "../../images/top-logo.svg";
import SearchImg from "../../images/search.svg";
import ArrowRight from "../../images/arrow-right.svg";
import CategoriesImg from "../../images/CATEGORIES2.png";
import ProtocalImg from "../../images/PROTOCALL.png";
import TrustImg from "../../images/TRUST1.png";
import OnlinePayImg from "../../images/Online-pay.png";

export default function Banner() {
  return (
    <>
      <section className="hero-section py-4 py-sm-5 mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="top-bannerHead">
                <Image src={TopLogo} alt="" />
                <h1>
                  find <span>pro</span>
                </h1>
                <h2>service providers</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-2 pt-sm-4">
            <div className="col-md-6">
              <div className="top-banner-searchbar position-relative">
                <div className="row align-items-center">
                  <div className="col-md-7 col-8 pr-0 pr-sm-3">
                    <Image src={SearchImg} className="search-icon" alt="" />
                    <input
                      type="email"
                      className="form-control search-inpt"
                      placeholder="Search for service providers here…"
                    />
                  </div>
                  <div className="col-md-5 text-right col-4 pr-2 pr-sm-4">
                    <button type="button" className="btn btn-login mr-2">
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>

              <div className="row mt-2 pl-3">
                <div className="col-md-12">
                  <ul>
                    <li className="first-text">Trending:</li>
                    <li>
                      <a href="#">AC Repair</a>
                    </li>
                    <li>
                      <a href="#">Architect</a>
                    </li>
                    <li>
                      <a href="#">Web Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center tophead-box">
            <div className="col-md-9">
              <div className="row noflexwrap">
                <div className="col-md-4 col-8">
                  <div className="product">
                    <div className="product-layer">
                      <h6>WHY PROTOCALL</h6>
                      <h4>
                        10<span>M+</span>
                      </h4>
                      <p>
                        community of <br /> pro service providers
                      </p>
                      <Image src={ArrowRight} alt="" />
                    </div>
                    <div className="product-img">
                      <Image src={ProtocalImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-8">
                  <div className="product pro2">
                    <div className="product-layer">
                      <h6 className="middle-cat">CATEGORIES</h6>
                      <h4>
                        150<span>+</span>
                      </h4>
                      <p>
                        wide variety of niche <br /> categories to search
                      </p>
                      <Image src={ArrowRight} alt="" />
                    </div>
                    <div className="product-img">
                      <Image src={CategoriesImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-8">
                  <div className="product">
                    <div className="product-layer">
                      <h6>TRUST</h6>
                      <h4>
                        45<span>+</span>
                      </h4>
                      <p>
                        fortune 500 companies <br /> trust protocall
                      </p>
                      <Image src={ArrowRight} alt="" />
                    </div>
                    <div className="product-img product-img-last">
                      <Image src={TrustImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-4 pb-4">
                <div className="col-md-12">
                  <Image src={OnlinePayImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../../components/layouts/loggedInHeader";
import SelectorRight from "../../../images/client-selector-right.svg";
import HireLeft from "../../../images/Hire-left.png";
import HireRight from "../../../images/Hire-right.png";

export default function Home() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/");
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
      <section className="client-section  position-relative">
        <div className="login-img d-none d-md-block">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-md-5 order-sm-2 pr-0 h-100">
                <Image src={SelectorRight} className="loginbg" alt="" />
              </div>
              <div className="col-md-7 order-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="container min-heighvh position-relative">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>howdy, Vinod !</h1>
              <h2>
                welcome to <span>protocall</span>
              </h2>

              <h4>what do you want to do today ?</h4>

              <div className="row mt-2 mt-sm-3">
                <div className="col-md-4 mb-3">
                  <div className="client-radio">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-check mt-3 desgin-radio">
                          <input
                            className="with-gap"
                            type="radio"
                            name="client-selector"
                            id="client1"
                          />
                          <label htmlFor="client1"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-6">
                        <p>Hire</p>
                        <h6>
                          I want to post a project and hire a service provider
                        </h6>
                      </div>
                      <div className="col-md-7 col-6">
                        <Image src={HireLeft} alt="" />
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
                            id="client2"
                          />
                          <label htmlFor="client2"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 col-6">
                        <p>Browse</p>
                        <h6>I just want to browse and buy services</h6>
                      </div>
                      <div className="col-md-7 col-6">
                        <Image src={HireRight} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3 mt-sm-2 mb-4">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-login"
                    onClick={onContinue}
                  >
                    CONTINUE TO BROWSE
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

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

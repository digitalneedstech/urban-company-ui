import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import FutureImage from "next/future/image";
import Header from "../../../components/layouts/loginHeader";
import ClientSelector from "../../../images/client-selector-right.svg";
import SignupForm from "../../../components/common/signupForm";

export default function Home() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/client/signup/profile");
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
                <FutureImage src={ClientSelector} className="loginbg" alt="" />
              </div>
              <div className="col-md-7 order-sm-1"></div>
            </div>
          </div>
        </div>

        <div className="container min-heighvh position-relative">
          <div className="row pt-4">
            <div className="col-md-12 mt-2 pt-5 mt-sm-5 position-inherit">
              <h1>signup as a client</h1>
              <h2>
                with <span>protocall</span>
              </h2>
              <SignupForm />
              <div className="row mt-2 mb-4">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-login"
                    onClick={onContinue}
                  >
                    CONTINUE AS A CLIENT
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

import Image from "next/image";
import { useRouter } from "next/router";
import Welcome from "../../images/profile-welcome.svg";
import CompanyWelcome from "../../images/company-logoleftimg.svg";

export default function ProfileImage(props) {
  const router = useRouter();
  let { pathname } = router;
  let isCompanyPath = pathname.indexOf("company") !== -1;

  const { onFinishSetup } = props;
  return (
    <>
      <section className="client-profile">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8 mt-2 pt-5 mt-sm-5">
              <div className="client-profilehead">
                {isCompanyPath ? (
                  <>
                    <h1>company logo</h1>
                    <h2>upload your logo here</h2>
                  </>
                ) : (
                  <>
                    <h1>profile image</h1>
                    <h2>upload your profile image</h2>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {isCompanyPath ? (
                <Image src={CompanyWelcome} alt="" />
              ) : (
                <Image src={Welcome} alt="" />
              )}
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <label htmlFor="#" className="profile-label">
                    Upload / browse profile image
                  </label>
                  <div className="">
                    <input
                      type="email"
                      className="form-control login-input profile-inpt"
                      placeholder="Click to browse"
                    />
                    <div className="upload-btn-wrapper">
                      <button className="uploadBtn">BROWSE</button>
                      <input type="file" />
                    </div>
                  </div>

                  <div className="border-bottom"></div>
                  <div className="profile-content">
                    <div className="row mt-3 mt-sm-4">
                      <div className="col-md-12">
                        <h1>Profile image tips</h1>
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 mb-4">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-login"
                        onClick={onFinishSetup}
                      >
                        FINISH ACCOUNT SETUP
                      </button>
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

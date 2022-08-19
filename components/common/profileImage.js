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
      <section class="client-profile">
        <div class="container">
          <div class="row pt-4">
            <div class="col-md-8 mt-2 pt-5 mt-sm-5">
              <div class="client-profilehead">
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
          <div class="row">
            <div class="col-md-6">
              {isCompanyPath ? (
                <Image src={CompanyWelcome} alt="" />
              ) : (
                <Image src={Welcome} alt="" />
              )}
            </div>
            <div class="col-md-6">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <label htmlFor="#" class="profile-label">
                    Upload / browse profile image
                  </label>
                  <div class="">
                    <input
                      type="email"
                      class="form-control login-input profile-inpt"
                      placeholder="Click to browse"
                    />
                    <div class="upload-btn-wrapper">
                      <button class="uploadBtn">BROWSE</button>
                      <input type="file" />
                    </div>
                  </div>

                  <div class="border-bottom"></div>
                  <div class="profile-content">
                    <div class="row mt-3 mt-sm-4">
                      <div class="col-md-12">
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
                  <div class="row mt-2 mb-4">
                    <div class="col-md-12">
                      <button
                        type="button"
                        class="btn btn-login"
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

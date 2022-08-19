import FutureImage from "next/future/image";
import ClientUser from "../../images/client-user.svg";
import ClientMobile from "../../images/client-mobile.svg";
import LoginSMS from "../../images/login-sms.svg";
import PasswordLock from "../../images/password-lock.svg";
import PasswordEye from "../../images/password-eye.svg";

export default function SignupForm() {
  return (
    <>
      <div className="row mt-4 mt-sm-4">
        <div className="col-md-4">
          <div className="form-group position-relative">
            <FutureImage src={ClientUser} className="login-smsimg" alt="" />
            <input
              type="email"
              className="form-control login-input"
              placeholder="Full name (first & last name)"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group position-relative">
            <FutureImage src={ClientMobile} className="login-smsimg" alt="" />
            <input
              type="email"
              className="form-control login-input"
              placeholder="Mobile number"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group position-relative">
            <FutureImage src={LoginSMS} className="login-smsimg" alt="" />
            <input
              type="email"
              className="form-control login-input"
              placeholder="Email address"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group position-relative">
            <FutureImage src={PasswordLock} className="login-smsimg" alt="" />
            <input
              type="email"
              className="form-control login-input"
              placeholder="Password"
            />
            <FutureImage src={PasswordEye} className="paswd-eyes" alt="" />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-5">
          <div className="form-group">
            <input className="filled-in" type="checkbox" value="" id="Check" />
            <label className=" checkFrom-label" for="Check">
              Yes, I understand and agree to the Protocall Terms of Service,
              including the User Agreement and Privacy Policy .
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

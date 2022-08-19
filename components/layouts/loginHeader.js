import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Logo.svg";

export default function LoginHeader() {
  const router = useRouter();
  let { pathname } = router;
  let isSignupPath = pathname.indexOf("signup") !== -1;

  return (
    <header>
      <div className="container">
        <div className="tophead border-bottom">
          <div className="row align-items-center">
            <div className="col-md-3 col-5 moblogo">
              <Link href="/">
                <Image src={Logo} alt="" />
              </Link>
            </div>
            <div className="col-md-9 col-7">
              <ul className="tophead-right">
                <li>
                  {isSignupPath ? (
                    <Link href="/login">
                      <button
                        type="button"
                        className="btn btn-outline-primary post-btn"
                      >
                        LOGIN
                      </button>
                    </Link>
                  ) : (
                    <Link href="/signup">
                      <button type="button" className="btn btn-login">
                        SIGNUP
                      </button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

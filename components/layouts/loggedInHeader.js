import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/future/image";
import Logo from "../../images/Logo.svg";
import ServiceProHeading from "../../images/service-prohead-img.png";
import ProHeading from "../../images/pro-headimg.png";
import ProUserPic from "../../images/pro-userpic.jpg";
import Bell from "../../images/bell.png";

export default function LoggedInHeader() {
  const router = useRouter();
  let { pathname } = router;
  let isClientPath = pathname.indexOf("client") !== -1;

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
                <li className="client-loginHead d-none d-sm-block">
                  <a href="#">
                    {isClientPath ? (
                      <Image src={ProHeading} className="pro-headimg" alt="" />
                    ) : (
                      <Image
                        src={ServiceProHeading}
                        className="pro-headimg"
                        alt=""
                      />
                    )}
                    You are logged in as a{" "}
                    <span>{isClientPath ? "CLIENT" : "SERVICE PROVIDER"}</span>
                  </a>
                </li>
                <li className="user-picHead">
                  <a href="#">
                    <span>
                      <Image src={ProUserPic} alt="" />
                    </span>
                    <p>Hi, Vinod !</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={Bell} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

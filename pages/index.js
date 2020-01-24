// import Head from "next/head";
import Head from "../components/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
const Index = () => (
  <html>
    <Head />
    {/* <div>
      <Head>
        <title>Login - Lifeline</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
       <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
         <script src="https://cdn.plyr.io/3.5.6/plyr.js"></script>
        <script src="/Js/myScript.js"></script>
       
      </Head>
    </div> */}
    <body>
      <Container fluid={true} className="h100" style={{ height: "100vh" }}>
        <Row
          className="row1 h100"
          style={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Col lg={4} md={4} sm={12} className="text-center">
            <div className="form-inline text-center">
              <img
                src="Image/logo.png"
                className="img-fluid imgLogo mx-auto d-flex"
              />
            </div>
            <p className="pHello">Welcome!</p>
            <p className="pHelloSub">
              Sign in by entering the information below
            </p>
            <div className="divEmail" style={{ marginTop: "35px" }}>
              <p className="pEmail">Email Address</p>
              <input
                type="text"
                className="txtEmail"
                placeholder="Enter email address here.."
              />
            </div>
            <div className="divPassword">
              <p className="pPassword">Password</p>
              <input
                type="password"
                className="txtPassword"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              />
            </div>
            <div className="divFooter">
              <input
                className="inp-cbx"
                id="cbx"
                type="checkbox"
                style={{ display: "none" }}
              />
              <label className="cbx" htmlFor="cbx">
                <span>
                  <svg
                    viewBox="0 0 12 10"
                    style={{ height: "10px", width: "12px" }}
                  >
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span className="lblRemember">Remember me</span>
              </label>
              <span className="lblForgot">Forgot password?</span> <br />
              <button className="btnSignIn" onClick="alert('sdsdsd')">
                Sign In
              </button>
              <p className="pDont">
                Don't have an account?
                <Link href="/signup">
                  <a>
                    <span>Sign Up </span>
                  </a>
                </Link>
              </p>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} className="colright">
            <div className="banner">
              <video muted id="player" playsinline controls autoPlay>
                <source
                  src="Video/LifelineAmbulanceRescue.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @media only screen and (max-width: 511px) {
          .btn,
          .colright,
          .banner {
            display: none !important;
          }
        }

        .myVideo {
          position: absolute;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
        }
        body,
        html {
          height: 100%;
          width: 100%;
        }
        .pHello {
          font-family: roboto, sans-serif;
          color: rgb(230, 49, 49);
          font-size: 2rem;
          font-weight: bold;
        }
        .pHelloSub {
          font-family: roboto, sans-serif;
          color: #9e9e9e;
          font-size: 0.9rem;
          margin-top: -10px;
        }
        .divcontainer-fluid,
        .divcontainer {
          height: 100vh;
        }
        .rowh100 {
          height: 100vh;
          background-color: blue;
        }
        .divEmail,
        .divPassword,
        .divFooter {
          width: 350px;
          text-align: center;
          margin: 0 auto;
        }
        .divFooter {
          margin-top: 20px;
        }
        .pEmail,
        .pPassword {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          float: left;
          font-weight: 500;
        }
        .pPassword {
          margin-top: 20px;
        }
        .row1 {
          align-items: center !important;
        }
        .txtEmail,
        .txtPassword {
          font-family: roboto, sans-serif;
          color: #424242;
          border: 1px solid #e0e0e0;
          background-color: #fafafa;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 0.9rem;
          width: 100%;
          text-align: left;
          outline: none;
          transition: all 0.2s;
        }
        .txtEmail:focus,
        .txtPassword:focus {
          background-color: rgb(230, 49, 49);
          color: white;
        }
        input:focus::-webkit-input-placeholder {
          color: white;
        }
        input[type="password"],
        input[type="text"] {
          margin-top: -5px;
        }

        .cbx {
          margin: auto;
          -webkit-user-select: none;
          user-select: none;
          cursor: pointer;
          float: left;
        }
        .cbx span {
          display: inline-block;
          vertical-align: middle;
          transform: translate3d(0, 0, 0);
        }
        .cbx span:first-child {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 3px;
          transform: scale(1);
          vertical-align: middle;
          border: 1px solid #9098a9;
          transition: all 0.2s ease;
        }
        .cbx span:first-child svg {
          position: absolute;
          top: 3px;
          left: 2px;
          fill: none;
          stroke: #ffffff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
        }
        .cbx span:first-child:before {
          content: "";
          width: 100%;
          height: 100%;
          background: rgb(230, 49, 49);
          display: block;
          transform: scale(0);
          opacity: 1;
          border-radius: 50%;
        }
        .cbx span:last-child {
          padding-left: 8px;
        }
        .cbx:hover span:first-child {
          border-color: rgb(230, 49, 49);
        }

        .inp-cbx:checked + .cbx span:first-child {
          background: rgb(230, 49, 49);
          border-color: rgb(230, 49, 49);
          animation: wave 0.4s ease;
        }
        .inp-cbx:checked + .cbx span:first-child svg {
          stroke-dashoffset: 0;
        }
        .inp-cbx:checked + .cbx span:first-child:before {
          transform: scale(3.5);
          opacity: 0;
          transition: all 0.6s ease;
        }

        @keyframes wave {
          50% {
            transform: scale(0.9);
          }
        }
        .lblRemember {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .lblRemember:hover {
          color: rgb(230, 49, 49);
        }
        .lblForgot {
          font-family: roboto, sans-serif;
          color: rgb(230, 49, 49);
          float: right;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 2px;
        }
        .lblForgot:hover {
          color: rgb(230, 49, 49, 0.5);
        }
        .btnSignIn {
          font-family: roboto, sans-serif;
          color: white;
          font-size: 1rem;
          background: rgb(230, 49, 49);
          border: 0px;
          width: 350px;
          border-radius: 5px;
          padding: 10px 10px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 20px;
          box-shadow: 0 2px 12px -6px #e63131 !important;
        }
        .pDont {
          font-family: roboto, sans-serif;
          color: #424242;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
        }
        .pDont > span {
          color: rgb(230, 49, 49);
        }
        .imgLogo {
          width: 70px;
          margin-bottom: 20px;
        }
        .pLifeline {
          font-family: Montserrat, roboto, sans-serif;
          font-size: 1.5rem;
          color: rgb(230, 49, 49);
          font-weight: bold;
          margin-top: 20px;
          margin-left: 10px;
        }
        .colright {
          height: 100vh;
          background-color: black;
          position: relative;
        }
        .banner {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
        }

        .banner video {
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        video[poster] {
          filter: brightness(50%);
        }
        .play-button {
          height: 80px;
          width: 80px;
          display: block;
          z-index: 999999999;
          overflow: hidden;
          position: absolute;
          bacground-color: black;
          left: 45%;
          top: 45%;
        }
        .left {
          height: 100%;
          float: left;
          background-color: #fff;
          width: 36%;
          -webkit-transition: all 0.25s ease;
          transition: all 0.25s ease;
          overflow: hidden;
        }
        .triangle-1 {
          -webkit-transform: translate(0, -100%);
                  transform: translate(0, -100%);
        }
        .triangle-2 {
          -webkit-transform: translate(0, 100%);
                  transform: translate(0, 100%);
        }
        .triangle-1,
        .triangle-2 {
          position: absolute;
          top: 0;
          right: 0;
          background-color: transparent;
          width: 0;
          height: 0;
          border-right: 300px solid #c0392b;
          border-top: 150px solid transparent;
          border-bottom: 150px solid transparent;
          -webkit-transition: -webkit-transform 0.25s ease;
          transition: -webkit-transform 0.25s ease;
          transition: transform 0.25s ease;
          transition: transform 0.25s ease, -webkit-transform 0.25s ease;
        }
        .right {
          height: 100%;
          float: right;
          width: 36%;
          background-color: #fff;
          -webkit-transition: all 0.25s ease;
          transition: all 0.25s ease;
        }
        .paused .left {
          width: 50%;
        }
        .paused .right {
          width: 50%;
        }
        .paused .triangle-1 {
          -webkit-transform: translate(0, -50%);
                  transform: translate(0, -50%);
        }
        .paused .triangle-2 {
          -webkit-transform: translate(0, 50%);
                  transform: translate(0, 50%);
        }
      ]
      
      `}</style>
    </body>
  </html>
);

export default Index;

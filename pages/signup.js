import Head from "../components/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
const Index = () => (

  <html>
    <head />
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
          <Col lg={4} className="text-center">
            <div className="form-inline text-center">
              <img
                src="Image/logo.png"
                className="img-fluid imgLogo mx-auto d-flex"
              />
            </div>
            <p className="pHello">SIGN UP</p>
            <p className="pHelloSub">
             Create your account in just a minute
            </p>
            <div className="divEmail" style={{ marginTop: "15px" }}>
              <p className="pEmail">First Name</p>
              <input
                type="text"
                className="txtEmail"
                placeholder="Enter firstname here.."
              />
            </div>
            <div className="divEmail" style={{ marginTop: "15px" }}>
              <p className="pEmail">Last Name</p>
              <input
                type="text"
                className="txtEmail"
                placeholder = "Enter lastname here.."
              />
            </div>
            <div className="divEmail" style={{ marginTop: "15px" }}>
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
              <button className="btnSignIn" onClick="playVid()">
                Sign In
              </button>
              <p className="pDont">
                Already have an account? <span>Sign In</span>
              </p>
            </div>
          </Col>
          <Col lg={8} className="colright">
            <div className="btn play">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
            </div>
            <div className="banner">
              <video muted id="myVideo" poster="Image/ambulance.jpg">
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
          color: #9e9e9e;
          float: right;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 2px;
        }
        .lblForgot:hover {
          color: rgb(230, 49, 49);
        }
        .btnSignIn {
          font-family: roboto, sans-serif;
          color: white;
          font-size: 1rem;
          background: rgb(230, 49, 49);
          border: 0px;
          width: 350px;
          border-radius: 5px;
          padding: 14px 10px;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 20px;
          box-shadow: 0 2px 12px -6px #e63131 !important;
        }
        .pDont {
          font-family: roboto, sans-serif;
          color: #9e9e9e;
          font-size: 0.9rem;
          cursor: pointer;
          margin-top: 20px;
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
        .btn {
          position: relative;
          width: 40px;
          height: 40px;
          border: white 3px solid;
          border-radius: 3px;
          cursor: pointer;
          transition: border 0.1s ease-in-out;
          z-index: 99999;
        }
        .btn:hover {
          border: #333 3px solid;
        }
        .btn:hover .bar {
          background-color: #333;
        }
        .btn .bar {
          display: inline-block;
          position: absolute;
          top: 10px;
          left: 0;
          width: 3px;
          height: 20px;
          border-radius: 3px;
          background-color: white;
          -webkit-transform-origin: center;
                  transform-origin: center;
          transition: background 0.1s ease-in-out, -webkit-transform 0.4s ease-in-out;
          transition: transform 0.4s ease-in-out, background 0.1s ease-in-out;
          transition: transform 0.4s ease-in-out, background 0.1s ease-in-out, -webkit-transform 0.4s ease-in-out;
        }
        .btn.pause .bar-1 {
          -webkit-transform: translateX(13.5px) translateY(0px) rotate(0deg);
                  transform: translateX(13.5px) translateY(0px) rotate(0deg);
        }
        .btn.pause .bar-2 {
          -webkit-transform: translateX(24px) translateY(0px) rotate(0deg);
                  transform: translateX(24px) translateY(0px) rotate(0deg);
        }
        .btn.play .bar-1 {
          -webkit-transform: translateX(20px) translateY(-5px) rotate(-55deg);
                  transform: translateX(20px) translateY(-5px) rotate(-55deg);
        }
        .btn.play .bar-2 {
          -webkit-transform: translateX(20px) translateY(5px) rotate(-125deg);
                  transform: translateX(20px) translateY(5px) rotate(-125deg);
        }
        
      `}</style>
    </body>
  </html>
);

export default Index;

import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Head from "next/head";

const tooltip = <Tooltip id="tooltip">Profile</Tooltip>;

const dashboard = () => (
  <div>
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
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
      <link rel="stylesheet" type="text/css" href="Css/dashboard.css" />
      <script type="text/javascript" src="Script/myScript.js"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <Container fluid={true} className="divNav">
        <Row>
          <Col lg={6}>
            <p class="pTitle">My Dashboard</p>
          </Col>
          <Col lg={6}>
            <div className="float-right form-inline">
              <img src="Image/dp.jpeg" className="imgProfile" />
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown-profile"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="h100 colSideMenu">
        <Row className="h100 align-items-center rowSide justify-content-center">
          <Col lg={12} className="text-center" style={{ position: "relative" }}>
            <img src="Image/logo.png" className="imgLogoLifeline"></img>

            <OverlayTrigger placement="right" overlay={tooltip}>
              <button className="btn">
                <img src="Image/user.png" className="imgLogo" />
              </button>
            </OverlayTrigger>

            <OverlayTrigger placement="right" overlay={tooltip}>
              <button className="btn">
                <img src="Image/membership.png" className="imgLogo" />
              </button>
            </OverlayTrigger>

            <button className="btn">
              <img src="Image/payment.png" className="imgLogo" />
            </button>

            <button className="btn">
              <img src="Image/services.png" className="imgLogo" />
            </button>

            <button className="btn btnLogout">
              <img src="Image/logout.png" className="imgLogo" />
            </button>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} style={{ zIndex: "-1" }}>
        <Row style={{ paddingTop: "100px" }}>
          <Col lg={12} style={{ paddingLeft: "90px" }}>
            <p className="pGreetings">Good morning</p>
            <p className="pName">Alfon Labadan!</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px", paddingLeft: "75px" }}>
          <Col lg={3}>
            <div className="divBox">
              <p className="pBoxTitle">Membership History</p>
              <p className="pBoxTitleResult">101 Membership History</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="divBox">
              <p className="pBoxTitle">Payment History</p>
              <p className="pBoxTitleResult">20 Payment History</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="divBox">
              <p className="pBoxTitle">Services</p>
              <p className="pBoxTitleResult">20 Services</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="divBox">
              <p className="pBoxTitle">Profile</p>
              <p className="pBoxTitleResult">12.10.20 Last Edit</p>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingLeft: "90px" }}  >
          <Col lg={8}>
            <div class="tabs">
              <div class="tab-2">
                <label for="tab2-1">One</label>
                <input
                  id="tab2-1"
                  name="tabs-two"
                  type="radio"
                  checked="checked"
                />
                <div>
                  <h4>Tab One</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas consequat id velit quis vestibulum. Nam id orci eu
                    urna mollis porttitor. Nunc nisi ante, gravida at velit eu,
                    aliquet sodales dui. Sed laoreet condimentum nisi a egestas.
                  </p>
                  <p>
                    Donec interdum ante ut enim consequat, quis varius nulla
                    dapibus. Vivamus mollis fermentum augue a varius. Vestibulum
                    in sapien at lectus gravida lobortis vulputate sed metus.
                    Duis scelerisque justo et maximus efficitur. Donec eu
                    eleifend quam. Curabitur aliquet commodo sapien eget
                    vestibulum. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Vestibulum vel
                    aliquet nunc, finibus posuere lorem. Suspendisse consectetur
                    volutpat est ut ornare.
                  </p>
                </div>
              </div>
              <div class="tab-2">
                <label for="tab2-2">Two</label>
                <input id="tab2-2" name="tabs-two" type="radio" />
                <div>
                  <h4>Tab Two</h4>
                  <p>
                    Quisque sit amet turpis leo. Maecenas sed dolor mi.
                    Pellentesque varius elit in neque ornare commodo ac non
                    tellus. Mauris id iaculis quam. Donec eu felis quam. Morbi
                    tristique lorem eget iaculis consectetur. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Aenean at tellus eget risus tempus
                    ultrices. Nam condimentum nisi enim, scelerisque faucibus
                    lectus sodales at.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </body>
  </div>
);

export default dashboard;

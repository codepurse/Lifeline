import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const Sidebar = () => (
    <Container fluid={true} className="h100 colSideMenu">
    <Row className="h100 align-items-center rowSide justify-content-center">
      <Col lg={12} className="text-center" style={{ position: "relative" }}>
        <img src="Image/logo.png" className="imgLogoLifeline"></img>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Profile</Tooltip>}>
          <button className="btn btnProfile">
            <img src="Image/user.png" className="imgLogo imgUser" />
            <span>Profile</span>
          </button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Membership</Tooltip>}>
          <button className="btn btnMembership">
            <img src="Image/membership.png" className="imgLogo" />
            <span>Membership</span>
          </button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Payment</Tooltip>}>
          <button className="btn btnPayment">
            <img src="Image/payment.png" className="imgLogo" />
            <span>Payment</span>
          </button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Services</Tooltip>}>
          <button className="btn btnServices">
            <img src="Image/services.png" className="imgLogo" />
            <span>Services</span>
          </button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Exit</Tooltip>}>
          <button className="btn btnExit">
            <img src="Image/logout.png" className="imgLogo" />
            <span>Exit</span>
          </button>
        </OverlayTrigger>

        <button className="btn btnRight">
          <img src="Image/next.png" className="imgLogo imgRight" />
          <span>Exit</span>
        </button>
      </Col>
    </Row>
  </Container>
);

export default Sidebar;
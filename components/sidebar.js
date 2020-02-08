import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const Sidebar = () => (
  <Container fluid={true} className="h100 colSideMenu">
    <Row className="h100 align-items-center rowSide justify-content-center">
      <Col lg={12} className="text-center" style={{ position: "relative" }}>
        <img src="Image/logo.png" className="imgLogoLifeline"></img>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Dashboard</Tooltip>}>
          <Link href="/dashboard">
            <button className="btn btnDashboard">
              <img src="Image/home.png" className="imgLogo imgUser" />
              <span>Dashboard</span>
            </button>
          </Link>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Profile</Tooltip>}>
          <Link href="/profile">
            <button className="btn btnProfile">
              <img src="Image/user.png" className="imgLogo imgUser" />
              <span>Profile</span>
            </button>
          </Link>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Membership</Tooltip>}>
          <Link href="/membership">
            <button className="btn btnMembership">
              <img src="Image/membership.png" className="imgLogo" />
              <span>Membership</span>
            </button>
          </Link>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Payment</Tooltip>}>
          <Link href="/payments">
            <button className="btn btnPayment">
              <img src="Image/payment.png" className="imgLogo" />
              <span>Payment</span>
            </button>
          </Link>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Services</Tooltip>}>
          <Link href="/services">
            <button className="btn btnServices">
              <img src="Image/services.png" className="imgLogo" />
              <span>Services</span>
            </button>
          </Link>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Notes</Tooltip>}>
          <Link href = "/notes">
            <button className="btn btnNotes">
              <img src="Image/notepad.png" className="imgLogo" />
              <span>Notes</span>
            </button>
          </Link>
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
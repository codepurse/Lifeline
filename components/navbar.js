import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => (
  <Container fluid={true} className="divNav">
        <Row>
          <Col lg={6} md = {6} sm = {6} xs = {6}>
            <p class="pTitle">My Dashboard</p>
          </Col>
          <Col lg={6} md = {6} sm = {6} xs = {6}>
            <div className="float-right form-inline">
              <img src="Image/dp.jpeg" className="imgProfile" />
              <span class="lblName">Alfon Labadan</span>
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
);

export default Navbar;

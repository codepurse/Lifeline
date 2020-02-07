import "bootstrap/dist/css/bootstrap.min.css";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";


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
      <Navbar></Navbar>
      <Sidebar></Sidebar>
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
          <main>
            <input id="tab1" type="radio" name="tabs" defaultChecked />
            <label htmlFor="tab1">Membership</label>
            <input id="tab2" type="radio" name="tabs" />
            <label htmlFor="tab2">Payments</label>
            <input id="tab3" type="radio" name="tabs" />
            <label htmlFor="tab3">Services</label>
            <section id="content1">
              <table >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Email">jamesmathan@gmail.com</td>
                    <td data-column="Number">09568795845</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Andor</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Email">andor12nagy@ymail.com</td>
                    <td data-column="Number">09425783215</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Tamas</td>
                    <td data-column="Last Name">Biro</td>
                    <td data-column="Email">birotamas@hotmail.com</td>
                    <td data-column="Number">09421578962</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Zoli</td>
                    <td data-column="Last Name">Mastah</td>
                    <td data-column="Email">mastah@gmail.com</td>
                    <td data-column="Number">09871546987</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Szabi</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Email">Szabinagy@ymail.com</td>
                    <td data-column="Number">09254987853</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section id="content2">
              <table id="myTable">
                <thead>
                  <tr>
                    <th>Reference Code</th>
                    <th>Paid Item</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-column="Referrence Code">#10254</td>
                    <td data-column="Paid Item">Group Plan 2 Years</td>
                    <td data-column="Date">May 10, 2019</td>
                    <td data-column="Status">Pending</td>
                  </tr>
                  <tr>
                    <td data-column="Referrence Code">#10875</td>
                    <td data-column="Paid Item">Invidual Plan 2 Years</td>
                    <td data-column="Date">January 12, 2019</td>
                    <td data-column="Status">Paid</td>
                  </tr>
                  <tr>
                    <td data-column="Referrence Code">#10575</td>
                    <td data-column="Paid Item">Invidual Plan 2 Years</td>
                    <td data-column="Date">June 14, 2019</td>
                    <td data-column="Status">Failed</td>
                  </tr>
                  <tr>
                    <td data-column="Referrence Code">#10217</td>
                    <td data-column="Paid Item">Group Plan 2 Years</td>
                    <td data-column="Date">December 1, 2018</td>
                    <td data-column="Status">Pending</td>
                  </tr>
                  <tr>
                    <td data-column="Referrence Code">#10423</td>
                    <td data-column="Paid Item">Group Plan 2 Years</td>
                    <td data-column="Date">March 20, 2019</td>
                    <td data-column="Status">Paid</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section id="content3">
              <table id="myTable">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Items</th>
                    <th>Book Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-column="Full Name">Alfon Labadan</td>
                    <td data-column="Items">Booking - Doctor on Call</td>
                    <td data-column="Date">June 12, 2019</td>
                    <td data-column="Status">Paid</td>
                  </tr>
                  <tr>
                    <td data-column="Full Name">Eskye Custodio</td>
                    <td data-column="Items">Booking - Doctor on Call</td>
                    <td data-column="Date">May 10, 2019</td>
                    <td data-column="Status">Failed</td>
                  </tr>
                  <tr>
                    <td data-column="Full Name">Nathan Nakar</td>
                    <td data-column="Items">Booking - Book A MedTech, Book A Nurse</td>
                    <td data-column="Date">February 20, 2019</td>
                    <td data-column="Status">Paid</td>
                  </tr>
                  <tr>
                    <td data-column="Full Name">Randolph Yu</td>
                    <td data-column="Items">Booking - Book A MedTech, Book A Nurse</td>
                    <td data-column="Date">November 22, 2019</td>
                    <td data-column="Status">Failed</td>
                  </tr>
                  <tr>
                    <td data-column="Full Name">Leo Sanico</td>
                    <td data-column="Items">Group Plan 2 Years</td>
                    <td data-column="Date">May 10, 2019</td>
                    <td data-column="Status">Pending</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        </Row>
      </Container>
    </body>
  </div>
);

export default dashboard;
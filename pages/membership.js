import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import { statusColor } from '../utils/layout'


const membership = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const memberships = [{ 'name': 'Alfon Labadan', 'items': 'Membership - Group Plan 2 Years', 'date': 'June 12, 2019', status: 'Paid' },
  { 'name': 'Eskye Custodio', 'items': 'Membership - Group Plan 1 Year', 'date': 'March 22, 2019', status: 'Failed' },
  { 'name': 'Leo Sanico', 'items': 'Membership - Individual Plan 1 Year', 'date': 'December 20, 2020', status: 'Pending' }]

  

  return (
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
      <Loader></Loader>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Container fluid={true} style={{ zIndex: "-1", paddingLeft: "90px" }} className = "colMain">
        <Row style={{ paddingTop: "100px" }}>
          <Col lg={6}>
            <p className="pNav pNav1">
              Membership<span className="pNumber">56 entries</span>
            </p>
          </Col>
          <Col lg={6}>
            <button className="float-right btnAdd" onClick={handleShow}>&#x2b;&nbsp;Add Membership</button>
          </Col>
        </Row>
        <Row style={{ marginTop: "-10px" }} className = "rowTag">
          <Col lg={6}>
            <button className="btnTag">
              <img
                src="Image/filter.png"
                className="img-fluid"
                style={{ width: "15px" }}
              ></img>
            </button>
            <button className="btnTagList btnPaid">
              Paid
            <img
                src="Image/close.png"
                style={{ width: "10px", marginLeft: "10px" }}
              ></img>
            </button>
            <button className="btnTagList btnFailed">
              Failed
            <img
                src="Image/close.png"
                style={{ width: "10px", marginLeft: "10px" }}
              ></img>
            </button>
            <button className="btnTagList btnPending">
              Pending
            <img
                src="Image/close.png"
                style={{ width: "10px", marginLeft: "10px" }}
              ></img>
            </button>
          </Col>
          <Col lg={6}>
            <p className="pSorted float-right">
              Sorted by <span>Paid</span>
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }} >
          <Col lg={12} className = "colTable">
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
                {memberships.map((membership, index) => {
                  return (
                    <tr key={index}>
                      <td data-column="Full Name">{membership.name}</td>
                      <td data-column="Items">{membership.items}</td>
                      <td data-column="Date">{membership.date}</td>
                      <td data-column="Status" className={statusColor(membership.status)}>{membership.status}</td>
                    </tr>
                  );
                })}
                {/* <tr>
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
                  <td data-column="Items">
                    Booking - Book A MedTech, Book A Nurse
                </td>
                  <td data-column="Date">February 20, 2019</td>
                  <td data-column="Status">Paid</td>
                </tr>
                <tr>
                  <td data-column="Full Name">Randolph Yu</td>
                  <td data-column="Items">
                    Booking - Book A MedTech, Book A Nurse
                </td>
                  <td data-column="Date">November 22, 2019</td>
                  <td data-column="Status">Failed</td>
                </tr>
                <tr>
                  <td data-column="Full Name">Leo Sanico</td>
                  <td data-column="Items">Group Plan 2 Years</td>
                  <td data-column="Date">May 10, 2019</td>
                  <td data-column="Status">Pending</td>
                </tr> */}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Bottom></Bottom>

      {/* Modal */}

      <Modal show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton className="text-center d-block">
          <Modal.Title>Choose Option</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Container fluid={true}>
            <Row>
              <Col lg={6} className="colModal">
                <img src="Image/team(3).png" className="img-fluid"></img>
                <p className="pChoose">Individual</p>
              </Col>
              <Col lg={6} className="colModal">
                <img src="Image/boss.png" className="img-fluid" style={{ width: "115px", marginTop: "10px" }}></img>
                <p className="pChoose" style={{ marginTop: "10px" }}>Group</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

    </div>
  )
};

export default membership;

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, OverlayTrigger, Tooltip, Dropdown, Modal, Button } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Head from "next/head";
import Bottom from "../components/bottom";
import Loader from "../components/loader";
import { statusColor } from '../utils/layout'

const addmember = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [age, setage] = useState('');

    function loadwindows() {
        const element = document.querySelector('#load')
        element.classList.add('animated', 'fadeOut')
        $('loader').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animation end', document.getElementById('load').setAttribute('style', 'display: none !important'));
    }

    function addallergens() {
        $('<div/>').addClass( 'new-text-div' )
        .html( $('<input type="textbox"/>').addClass( 'someclass' ) )
        .append( $('<button/>').addClass( 'remove' ).text( 'Remove' ) )
        .insertBefore( this );
    }


return (
    <div onLoad={loadwindows}>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
        </head>
        <Loader></Loader>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Container fluid={true} className="colMain" style={{ zIndex: "-1", paddingLeft: "90px" }} >
            <Row style={{ paddingTop: "100px" }}>
                <Col lg={12}>
                    <p className="pNav pNav1">
                        Add Member<span className="pAddOptions">Individual</span>
                    </p>
                </Col>
            </Row>
        </Container>
        <Container className="conAddProfile">
            <Row>
                <Col lg={12}>
                    <p className="pBasic">Basic Information</p>
                </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
                <Col lg={4} md={4}>
                    <p className="pTitleAdd">MIDDLE NAME</p>
                    <input
                        type="text"
                        value={middleName}
                        onChange={e => setMiddleName(e.target.value)}
                        className="txtBox"
                        placeholder="Enter middle name"
                    />
                </Col>
                <Col lg={4} md={4}>
                    <p className="pTitleAdd">FIRST NAME</p>
                    <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="txtBox"
                        placeholder="Enter first name"
                    />
                </Col>
                <Col lg={4} md={4}>
                    <p className="pTitleAdd">LAST NAME</p>
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="txtBox"
                        placeholder="Enter last name"
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
                <Col lg={4}>
                    <p className="pTitleAdd">DATE OF BITRH</p>
                    <input type="date" name="dateofbirth" id="dateofbirth" placeholder="MM/DD/YYYY" />
                </Col>
                <Col lg={4} md={4}>
                    <p className="pTitleAdd">AGE</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter age"
                    />
                </Col>
                <Col lg={4} md={4}>
                    <p className="pTitleAdd">GENDER</p>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Male</span></label>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Female</span></label>
                </Col>
            </Row>
            <Row style={{ marginTop: "12px" }}>
                <Col lg={1}>
                    <p className="pTitleAdd">AGE</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter age"
                    />
                </Col>
                <Col lg={7}>
                    <p className="pTitleAdd">GENDER</p>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Single</span></label>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Married</span></label>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Seperated</span></label>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Widowed</span></label>
                </Col>
                <Col lg={4}>
                    <p className="pTitleAdd">NATIONALITY</p>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Filipino</span></label>
                    <input className="inp-cbx" id="cbx" type="checkbox" style={{ display: 'none' }} />
                    <label className="cbx" htmlFor="cbx"><span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1" />
                        </svg></span><span>Others</span></label>
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col lg={12}>
                    <p className="pBasic">Permanent Address</p>
                </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
                <Col lg={2}>
                    <p className="pTitleAdd">Unit / Floor No</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter unit/ floor"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Building Name</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter building name"
                    />
                </Col>
                <Col lg={2}>
                    <p className="pTitleAdd">Street No</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter street no"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Subdivision Name</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter subdivision name"
                    />
                </Col>
                <Col lg={2}>
                    <p className="pTitleAdd">Street Name</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter street name"
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col lg={3}>
                    <p className="pTitleAdd">Barangay / Town</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter barangay / town"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">City / Muinicipality</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter city / municipality"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Province</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter province"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Zip Code</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter zip code"
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col lg={3}>
                    <p className="pTitleAdd">Telephone Number</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter telphone number"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Fax Number</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter fax number"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Mobile Number</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter mobile number"
                    />
                </Col>
                <Col lg={3}>
                    <p className="pTitleAdd">Email Address</p>
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter email address"
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
                <Col lg={12}>
                    <p className="pBasic">If you suffer from allergies, please state known allergens</p>
                </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
                <Col lg={12} className="addbutton">
                    <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="txtBox"
                        placeholder="Enter allergens"
                    />
                </Col>
                <Col lg={12}>
                    <button id="add">Add allergens</button>
                </Col>
            </Row>
        </Container>
    </div>
)

};
export default addmember;
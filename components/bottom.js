import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";

const Bottom = () => (
    <Container fluid={true} className="colBottom">
        <Row className="text-center">
            <Col xs={3}>
                <Link href="/dashboard">
                    <img src="Image/home.png" className="imgLogo" />
                </Link>
            </Col>
            <Col xs={3}>
            <Link href="/profile">
                    <img src="Image/user.png" className="imgLogo" />
                </Link>
            </Col>
                <Col xs={3}>
                <Link href="/membership">
                    <img src="Image/membership.png" className="imgLogo" />
                </Link>
                </Col>
                <Col xs={3}>
                    <img src="Image/payment.png" className="imgLogo" />
                </Col>
        </Row>
    </Container>
        );
        
export default Bottom;
import React from "react";
import Headshot from "../images/portfolio-picture.jpg";
import Eddylogo from "../images/educationdynamicslogo.PNG"
import Merionlogo from "../images/merion-matters-logo.png"
import CreativeClicklogo from "../images/creative-click-media-logo.png"
import { Row, Container, Col, Accordion, Card, ListGroup } from "react-bootstrap";

function resumeblock() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col lg={12}>
                            <img src={Headshot} className="img-fluid portfolio-pic" height="300" width="300" alt="SEO Technical Analyst Jesse R. Larsen" />
                        </Col>
                    </Row>
                    <Row>
                        <a className="fa-fw fab fa-github-square fa-2x" href={"https://github.com/J35RL4R/"} title="github"target="_blank" rel="noreferrer"></a>
                        <a className="fa-fw fab fa-linkedin fa-2x" href={"https://www.linkedin.com/in/jesse-r-larsen/"} title="linkedin" target="_blank" rel="noreferrer"></a>
                        <a className="fa-fw fas fa-envelope fa-2x" href={"mailto:larsenj732@gmail.com"} target="_blank" title="email address" rel="noreferrer"></a>
                        <a className="fa-fw fas fa-file fa-2x" href={"https://docs.google.com/document/d/1t4nm60cDcDlzaNyKp2yBYgtSda66QMH6dJ27xNseKpE/edit?usp=sharing"} title="Resume" target="_blank" rel="noreferrer"></a>
                    </Row>
                    <Accordion>
                        <Card className="resume-border-box">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Professional Summary</h2>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <p>After Graduating from Rowan University in 2015, Jesse has pursued a career in digital marketing.</p>
                                    <p>His experience comes from working in a variety of industries including SaaS companies, digital marketing firms, healthcare publication and higher education marketing.</p>
                                    <p>Jesse has consistently proven to excel particularly in on and off-page site optimizations and project management.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card className="resume-border-box">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <img src={Eddylogo} alt="educationdynamics logo" class="float-left" />
                                <h6>SEO Technical Analyst - EducationDynamics</h6>
                                <p>April 2017- Present</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ListGroup variant="flush" className="resume-list-formatter">
                                        <ListGroup.Item disabled tag="a" href="#">SEO technical optimization on mulitple company owned and affilate sites</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Execution of multiple off-page optimization projects for company owned sites and clients</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Content development, editing, and optimization</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Heads social media for multiple affiliate accounts</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card className="resume-border-box">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <img src={Merionlogo} alt="merion matters logo" class="float-left" />
                                <h6>SEO/SEM Specialist - Merion Matters </h6>
                                <p>September 2016 - March 2017</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ListGroup variant="flush" className="resume-list-formatter">
                                        <ListGroup.Item disabled tag="a" href="#">Interpreting Google, MOZ, Screaming Frog and ahrefs analytics</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Performed search engine optimization for eleven of their websites</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Researching and ranking content for relevant keywords with high search volumes</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Editing and managing anchor text, URLs, title tags, and meta descriptions</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Advising editors on how they can help optimize content</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Strategizing with editors to formulate content strategies and social media best practices</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Managed paid search for two of their retail websites</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Managing social media accounts</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card className="resume-border-box">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <img src={CreativeClicklogo} alt="creative click media logo" class="float-left" />
                                <h6>SEO Account Coordinator - Creative Click Media</h6>
                                <p>May 2016 - September 2016</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ListGroup variant="flush" className="resume-list-formatter">
                                        <ListGroup.Item disabled tag="a" href="#">Search engine optimization for 30+ clients in a variety of industries</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Keyword research</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Interpreting Google, SEMrush, Screaming Frog and ahrefs analytics</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Daily site audits</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Daily commiunications with clients</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Strategizing with editors to formulate content strategies and social media best practices</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Social media and content planning</ListGroup.Item>
                                        <ListGroup.Item disabled tag="a" href="#">Blog writing for company and external clients</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default resumeblock;
import React from "react";
import Headshot from "../images/portfolio-picture.jpg";
import Eddylogo from "../images/educationdynamicslogo.PNG"
import Merionlogo from "../images/merion-matters-logo.png"
import CreativeClicklogo from "../images/creative-click-media-logo.png"
import { Row, Container, Col, Accordion, Card } from "react-bootstrap";

function resumeblock() {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <h1>My Professional Background</h1>
                    <img src={Headshot} class="img-fluid" alt="SEO Technical Analyst Jesse R. Larsen" />
                    <Row>
                        <Col>
                            <a class="fab fa-github-square fa-3x" href={"https://github.com/J35RL4R/"} target="_blank" rel="noreferrer"></a>
                        </Col>
                        <Col>
                            <a class="fab fa-linkedin fa-3x" href={"https://www.linkedin.com/in/jesse-r-larsen/"} target="_blank" rel="noreferrer"></a>
                        </Col>
                        <Col>
                            <a class="fas fa-envelope fa-3x" href={"mailto:larsenj732@gmail.com"} target="_blank" rel="noreferrer"></a>
                        </Col>
                        <Col>
                            <a class="fas fa-file fa-3x" href={"https://docs.google.com/document/d/1t4nm60cDcDlzaNyKp2yBYgtSda66QMH6dJ27xNseKpE/edit?usp=sharing"} target="_blank" rel="noreferrer"></a>
                        </Col>
                    </Row>
                    <div className="resume-border-box">
                        <p>After Graduating from Rowan University in 2015, Jesse has pursued a career in digital marketing.</p>
                        <p>His experience comes from working in a variety of industries including SaaS companies, digital marketing firms, healthcare publication and higher education marketing.</p>
                        <p>Jesse has consistently proven to excel particularly in on and off-page site optimizations and project management.</p>
                    </div>

                </Col>
                <div class="col-md-7">
                    <Accordion>
                        <Card className="resume-border-box">
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <img src={Eddylogo} alt="educationdynamics logo" class="float-left" />
                                <h6>SEO Technical Analyst - EducationDynamics</h6>
                                <p>April 2017- Present</p>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <ul>
                                <li>SEO technical optimization on mulitple company owned and affilate sites</li>
                                <li>Execution of multiple off-page optimization projects for company owned sites and clients</li>
                                <li>Content development, editing, and optimization</li>
                                <li>Heads social media for multiple affiliate accounts</li>
                            </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div class="resume-border-box">
                        <img src={Merionlogo} alt="merion matters logo" class="float-left" />
                        <h3>SEO/SEM Specialist - Merion Matters </h3>
                        <p>September 2016 - March 2017</p>
                        <ul>
                            <li>Interpreting Google, MOZ, Screaming Frog and ahrefs analytics</li>
                            <li>Performed search engine optimization for eleven of their websites</li>
                            <li>Researching and ranking content for relevant keywords with high search volumes</li>
                            <li>Editing and managing anchor text, URLs, title tags, and meta descriptions</li>
                            <li>Advising editors on how they can help optimize content</li>
                            <li>Strategizing with editors to formulate content strategies and social media best practices</li>
                            <li>Managed paid search for two of their retail websites</li>
                            <li>Managing social media accounts</li>
                        </ul>
                    </div>
                    <div class="resume-border-box">
                        <img src={CreativeClicklogo} alt="creative click media logo" class="float-left" />
                        <h3>SEO Account Coordinator - Creative Click Media</h3>
                        <p>May 2016 - September 2016</p>
                        <ul>
                            <li>Search engine optimization for 30+ clients in a variety of industries</li>
                            <li>Keyword research</li>
                            <li>Interpreting Google, SEMrush, Screaming Frog and ahrefs analytics</li>
                            <li>Daily site audits</li>
                            <li>Daily commiunications with clients</li>
                            <li>Social media and content planning</li>
                            <li>Blog writing for company and external clients</li>
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default resumeblock;
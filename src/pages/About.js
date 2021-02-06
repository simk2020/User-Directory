import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://p12cdn4static.sharpschool.com/UserFiles/Servers/Server_3008318/Image/Directory/directory.png">
        {/* <h1>Name</h1>
        <h2>Employees</h2> */}
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to our Company's Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lnon sem facilisis, tempus tortor sit amet,
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

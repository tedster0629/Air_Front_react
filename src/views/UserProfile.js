/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                   
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue=""
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue=""
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue=""
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          defaultValue=""
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                      <FormGroup>
                        <label>Confirm Password</label>
                        <Input
                          defaultValue=""
                          placeholder="Confirm Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>

                  </Row>

                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg")}
                    />
                    <h1 className="title">Mike Andrew</h1>
                  </a>
                  {/* <p className="description">Ceo/Co-Founder</p> */}
                </div>
                <h3>My Subscription</h3>
                <Row>
                  <Col md ="4">
                    <p>Current Plan</p>
                    <h2>LTD - Tier 2</h2>
                  </Col>
                  <Col md ="4">
                    <p>Max Characters Per Productions</p>
                    <h2>10000</h2>
                  </Col>
                  <Col md ="4">
                    <p>Remaining Overall Characters</p>
                    <h2>2000000</h2>
                  </Col>
                  <Col md ="4">
                    <p>Remaining Productions</p>
                    <h2>Unlimited</h2>
                  </Col>
                  <Col md ="4">
                    <p>Remaining Free Productions</p>
                    <h2>0</h2>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className="button">
                <Button className="btn-fill" color="primary" type="submit">
                  upgrade
                </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;

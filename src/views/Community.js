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
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Button,
  Row,
  Col,
} from "reactstrap";

function Community() {
  return (
    <>
      <div className="content">
      <Row>
          <Col md="4" className="mb-2">
            <Card>
              <CardHeader>
                <h5 className="title">Join Our Discord Group</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Use the link below to join our Discord group.</label>
                  <br></br>
                  <Button className="btn-fill mt-2" color="info" type="submit">
                  <i className="fab fa-discord mr-2"></i>
                    Join Our Discord
                  </Button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-2">
            <Card>
              <CardHeader>
                <h5 className="title">Join Our Facebook Group</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Use the link below to join our Facebook group.</label>
                  <br></br>
                  <Button className="btn-fill mt-2" color="info" type="submit">
                  <i className="fab fa-facebook mr-2"></i>
                  Join Our Facebook
                  </Button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-2">
            <Card>
              <CardHeader>
                <h5 className="title">Join Our Slack Group</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Use the link below to join our Slack group.</label>
                  <br></br>
                  <Button className="btn-fill mt-2" color="primary" type="submit">
                  <i className="fab fa-slack mr-2"></i>
                  Join Our Slack
                  </Button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Community;

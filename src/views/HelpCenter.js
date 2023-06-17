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
import { Card, CardHeader, CardBody, FormGroup, Button, Row, Col } from "reactstrap";

function HelpCenter() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <h5 className="title">Live Chat on our Website</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Use the link below to Chat with us.</label>
                  <br></br>
                  <Button className="btn-fill mt-2" color="primary" type="submit">
                    <i className="tim-icons icon-chat-33 mr-2"></i>
                    Live Chat
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

export default HelpCenter;

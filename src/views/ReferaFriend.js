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
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Input, Button,} from "reactstrap";



function ReferaFriend() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Invite Your Friend</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Insert your friend’s email address and send them invitations to join VoiceAir</label>
                  <Input
                    defaultValue=""
                    placeholder="Type Email Address"
                    type="email"
                  />
                  
                  <Button className="btn-fill mt-2" color="primary" type="submit">
                  <i className="tim-icons icon-send mr-2"></i>
                    Invite
                  </Button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <h5 className="title">Share The Referral Link</h5>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <label>Share your referral code by copying and sending it or sharing it on your social media</label>
                  <Input
                    defaultValue=""
                    placeholder="https://voiceair.com/rs/QY615C"
                    type="text"
                  />
                  
                  <Button className="btn-fill mt-2" color="primary" type="submit">
                  <i className="tim-icons icon-single-copy-04 mr-2"></i>
                    Copy
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

export default ReferaFriend;

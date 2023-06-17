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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  DropdownMenu,
} from "reactstrap";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications</CardTitle>
                <DropdownMenu>SortBy</DropdownMenu>
              </CardHeader>


              <CardBody>
                <h>Today</h>
                <UncontrolledAlert className="alert-with-icon mt-2" color="error">
                  <Row>
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                    <Col md="9">
                      <div>
                        <span data-notify="message">
                          You Have Successfully Purchased Tier 2 & you’re getting Tier 1 for FREE
                        </span><br></br>
                        <span>1:38 PM</span>
                      </div>
                    </Col>
                    <Col md="3">
                      <Button className="btn" color="info">My Subscription</Button>
                    </Col>
                  </Row>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon mt-2" color="error">
                  <Row>
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                    <Col md="9">
                      <div>
                        <span data-notify="message">
                        Your project rendering is finished. The title is “First Project”
                        </span><br></br>
                        <span>10:24 AM</span>
                      </div>
                    </Col>
                    <Col md="3">
                      <Button className="btn" color="primary">View Project</Button>
                    </Col>
                  </Row>
                </UncontrolledAlert>
                
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>

            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Notifications;

import React from "react";

// reactstrap components
import {
  Row,
  Col,
  Card,
} from "reactstrap";


// const CardData = [
//   {
//     title: "This is Project Title",
//     date: "13th May 2023",
//     avatar: "assets/image/image.jpg"
//   },
//   {
//     title: "This is Project Title",
//     date: "13th May 2023",
//     avatar: "assets/image/image1.jpg"
//   },
//   {
//     title: "This is Project Title",
//     date: "13th May 2023",
//     avatar: "assets/image/image2.jpg"
//   },
//   {
//     title: "This is Project Title",
//     date: "13th May 2023",
//     avatar: "assets/image/image3.jpg"
//   },
//   {
//     title: "This is Project Title",
//     date: "13th May 2023",
//     avatar: "assets/image/image4.jpg"
//   },
// ]

function Dashboard() {

  return (
    <>
      <div className="content">
        <Row>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/1.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/2.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/3.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/4.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/5.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
          <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
              <img className="projectimg" src={require("assets/image/Dash/6.png")} alt="Projectimage" />
              <div>
                <p className="projecttitle">
                  Thi is Project Title
                </p>
                <p className="projectdate">
                  13th May 2023
                </p>
              </div>
              <div>
                <i className="tim-icons icon-pencil editicon"></i>
                <a href="https://www.example.com" className="edittitle">Edit</a>
              </div>
              <div>
                <i className="tim-icons icon-trash-simple deleteicon"></i>
                <a href="https://www.example.com" className="deletetitle">Delete</a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

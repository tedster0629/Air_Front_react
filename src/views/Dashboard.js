import SoundCard from "../components/Card/SoundCard";
import React from "react";

// reactstrap components
import {
  Row,
  // Col,
  // Card
} from "reactstrap";


const CardData = [
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image.png"
  },
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image1.png"
  },
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image2.png"
  },
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image3.png"
  },
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image4.png"
  },
  {
    title: "This is Project Title",
    date: "13th May 2023",
    avatar: "image.png"
  },
]


function Dashboard() {

 

  return (
    <>
      <div className="content">
        <Row>
          {CardData.map((data) => (
              <SoundCard title={data.title} avatar={data.avatar} date={data.date} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

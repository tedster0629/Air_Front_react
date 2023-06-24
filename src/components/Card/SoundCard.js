import React from 'react';
import { Col, Card } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const SoundCard = ({ avatar, title, date }) => {
    const navigate = useNavigate();

    const changePage = () => {
        navigate('/admin/Voice');
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
return ( 
    <Col className={`col-${screenWidth > 1850 ? 3 : (screenWidth > 1450 ? 4 : (screenWidth > 1080 ? 6 : 12))}`} >
        <span style={{ cursor: "pointer" }} onClick={changePage}>
            <Card className="projectcard">

                <img className="projectimg" src={require(`assets/image/${avatar}`)} alt="Project" />
                <div>
                    <p className="projecttitle">
                        {title}
                    </p>
                    <p className="projectdate">
                        {date}
                    </p>
                </div>
                <div>
                    <i className="tim-icons icon-pencil editicon"></i>
                    <a href='https://www.example.com' className="edittitle">Edit</a>
                </div>
                <div>
                    <i className="tim-icons icon-trash-simple deleteicon"></i>
                    <a href='https://www.example.com' className="deletetitle">Delete</a>
                </div>
            </Card>
        </span>
    </Col>
);
}

export default SoundCard;
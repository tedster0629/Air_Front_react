import React from 'react';
import { Col, Card } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const SoundCard = ({ avatar, title, date }) => {
    const navigate = useNavigate();

    const changePage = () => {
        navigate('/admin/Voice');
    }
    return (
        <Col xl="3" lg='6' xs="12">
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
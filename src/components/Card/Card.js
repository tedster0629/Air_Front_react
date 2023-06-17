import React from 'react';
import { Col } from 'reactstrap';

function Card(props) {
    
    return (
        <Col xl="3" lg='6' xs="12">
            <Card className="projectcard">
                <img className="projectimg" src={require(props.avatar)} alt = "Project" />
                <div>
                    <p className="projecttitle">
                        {props.title}
                    </p>
                    <p className="projectdate">
                        {props.date}
                    </p>
                </div>
                <div>
                    <i className="tim-icons icon-pencil editicon"></i>
                    <a href='#' className="edittitle">Edit</a>
                </div>
                <div>
                    <i className="tim-icons icon-trash-simple deleteicon"></i>
                    <a href='#' className="deletetitle">Delete</a>
                </div>
            </Card>
        </Col>
    );
} 

export default Card;
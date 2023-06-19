import {Card, Col, Row } from 'react-bootstrap';

export const Joyful = () => {

    const JoyfulCardData = [
        {
            title : "Default",
            icon : "",
        },
        {
            title : "Empathic",
            icon : "",
        },
        {
            title : "Soft",
            icon : "",
        },
        {
            title : "Default",
            icon : "",
        },
        {
            title : "Default",
            icon : "",
        },
        {
            title : "Empathic",
            icon : "",
        },
        {
            title : "Soft",
            icon : "",
        },
        {
            title : "Default",
            icon : "",
        },
        {
            title : "Default",
            icon : "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title : "Empathic",
            icon : "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title : "Soft",
            icon : "",
        },
        {
            title : "Default",
            icon : "",
        },
        {
            title : "Default",
            icon : "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title : "Empathic",
            icon : "",
        },
        {
            title : "Soft",
            icon : "",
        },
        

    ]
    return (
        <Row>
            {JoyfulCardData.map((data, idx) => (
                <Col key={idx}>
                    <Card className="joyfulcard mt-2">
                        <p className='mr-2 ml-2'>{data.title}</p>
                        <i className={data.icon}></i>
                    </Card>
                </Col>
            ))}
        </Row>
    );

}

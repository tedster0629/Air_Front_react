import { Col } from "react-bootstrap";
import { Card, Row } from "reactstrap";

export const Rachel = () => {

    const RachelCardData = [
        {
            image: "1.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
       
        {
            image: "2.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "1.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "3.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "4.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "5.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "6.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "1.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "2.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "3.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "4.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
        {
            image: "5.png",
            title: 'Brooklyn',
            icon: "tim-icons icon-satisfied"
        },
    ]

    return (
        <>
            <Row>
                {RachelCardData.map((data, idx) => (
                    <Col key={idx} xl="3" lg='6' xs="12">
                        <Card className="RachelCard mt-2">
                            <img className="" src={require(`assets/image/MusicAvatar/${data.image}`)} style={{width : "22px"}} alt = "error" ></img>
                            <p>{data.title}</p>
                            <i className={data.icon}></i>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );

}

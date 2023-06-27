import { Button, Card, Col, Input, Label, Row } from "reactstrap"
// import { useNavigate } from "react-router-dom";

export const Auth = () => {

    // const navigate = useNavigate();
    // const onChangePage = () => {
    //     navigate('/admin/Dashboard');
    // }

    return (
        <div className="background" >
            <Card className="container p-3 m-3 mb-2">
                <Row style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
                    <Col xl="6">
                        <img src={require(`assets/image/loginback.jpg`)} alt="..." ></img>
                    </Col>
                    <Col xl="6">

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img className="mr-3" style={{ width: "10%" }} src={require(`assets/image/logo.png`)} alt="..."></img>
                            <h2 className="mt-4">Welcome to voiceover Air </h2>
                        </div>
                        <Label>User Email : </Label>
                        <Input className="mt-2  mb-2" type="email" placeholder="Enter your email address"></Input>
                        <Label>User Password :</Label>
                        <Input className="mt-2  mb-2" type="password" placeholder="Enter your password"></Input>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button href="/admin/Dashboard" className="mt-2" color="primary" >Continue</Button>
                            <Button data-toggle="modal" data-target="#myModal" className="mt-2" color="" >Purchase a Package</Button>
                        </div>
                    </Col>
                </Row>
            </Card>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content modalback">

                        <div class="modal-header">
                            <h4 style={{ color: "white" }} class="modal-title">Purchase a Package</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body m-4" style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <span>
                                Thanks for your interest in joining Air™, we'd love to see you on our platform.<br></br>Please enter your email address, and select a package and you'll be away in no time!
                            </span>
                            <Input className="mt-2  mb-2" type="email" placeholder="Enter your email address"></Input>
                            <Input className="mt-2  mb-2" type="password" placeholder="Enter your password"></Input>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Social Media
                                    </span> - $4.00/
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Pro
                                    </span> - $12.00/
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Expert
                                    </span> - $30.00/
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Lifetime Deal Tier 1
                                    </span> - $49.99/
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Lifetime Deal Tier 2
                                    </span> - $147.50/
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="package" id="package-0" value="price_1MkkMqHfY0Et7SE3gZSBCUVw" />
                                <label class="form-check-label" for="package-price_1MkkMqHfY0Et7SE3gZSBCUVw">
                                    <span>Air Lifetime Deal Tier 3
                                    </span> - $275.00/
                                </label>
                            </div>
                        </div>

                        <div class="modal-footer p-2">
                            <button type="button" class="btn btn-blue">Pay</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
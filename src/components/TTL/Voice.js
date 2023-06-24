import React, { useState, useEffect } from 'react';

import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { English } from './Project/English';
import { Rachel } from './Project/Rachel';
import { Joyful } from './Project/Joyful';
import { Translate } from './Project/Translated';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare, faEye } from '@fortawesome/free-solid-svg-icons'

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


const Voice = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const handleNavClick = (eventKey) => {
        setActiveNavItem(eventKey);
    }

    const [value, setValue] = useState([0, 60]);

    const onChange = (newValue) => {
        console.log(newValue);
        setValue([newValue[0] !== 0 ? newValue[0] : newValue[1], 0].sort());
    }

    const [value1, setValue1] = useState([0, -60]);

    const onChange1 = (newValue) => {
        console.log(newValue);
        setValue1([newValue[0] !== 0 ? newValue[0] : newValue[1], 0].sort());
    }

    const [value2, setValue2] = useState([0, 60]);

    const onChange2 = (newValue) => {
        console.log(newValue);
        setValue2([newValue[0] !== 0 ? newValue[0] : newValue[1], 0].sort());
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

    return (
        <div className='content row '>
            <div className={`col-${screenWidth > 1600 ? 6 : (screenWidth > 10 ? 12 : 12)} mb-2`}>
                <Card className='Projectdes'>
                    <CardHeader>
                        <Nav justify variant="tabs" defaultActiveKey="English">
                            <NavItem>
                                <NavLink className='navclass' eventKey="English" onClick={() => handleNavClick("English")}>
                                    <i className="tim-icons icon-caps-small mr-2 iconcolor"></i>
                                    <p>English(UK)</p>
                                    <i className='tim-icons icon-minimal-down iconcolor ml-2'></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navclass' eventKey="Rachel" onClick={() => handleNavClick("Rachel")}>
                                    <i className="tim-icons icon-single-02 mr-2 iconcolor"></i>
                                    <p>Rachel</p>
                                    <i className='tim-icons icon-minimal-down iconcolor ml-2'></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navclass' eventKey="Joyful" onClick={() => handleNavClick("Joyful")}>
                                    <i className="tim-icons icon-satisfied mr-2 iconcolor"></i>
                                    <p>Joyful</p>
                                    <i className='tim-icons icon-minimal-down iconcolor ml-2'></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navclass' eventKey="Translate" onClick={() => handleNavClick("Translate")}>
                                    <i className="tim-icons icon-refresh-02 mr-2 iconcolor"></i>
                                    <p>Translate</p>
                                    <i className='tim-icons icon-minimal-down iconcolor ml-2'></i></NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader >
                    <CardBody className="scrollbar" id="style-1" style={{ overflow: "auto" }}>
                        {activeNavItem === 'English' && <English></English>}
                        {activeNavItem === 'Rachel' && <Rachel ></Rachel>}
                        {activeNavItem === 'Joyful' && <Joyful></Joyful>}
                        {activeNavItem === 'Translate' && <Translate></Translate>}
                    </CardBody>


                    <CardFooter>
                        <hr size="10" width="96%" color="#324250" align="center" />
                        <Button className="btn" color="" style={{ float: "left", paddingRight: "20px", paddingLeft: "20px" }}>
                            Preview
                        </Button>
                        <Button className="btn" color="primary" style={{ float: "left", paddingRight: "20px", paddingLeft: "20px" }}>
                            + Add to Timeline
                        </Button>
                        <Button className="btn" color="" style={{ float: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                            Next <i className='ml-2 tim-icons icon-minimal-right'></i>
                        </Button>
                    </CardFooter>
                </Card>
                <div className='row' style={{ alignItems: "center" }}>
                    <div className='col-10'>
                        <Card className='dbscroll p-2 mt-2 mb-3'>
                            <div className='row mt-2' style={{ textAlign: "center" }}>
                                <div className='col-2'><p>-10db</p></div>
                                <div className='col-8'><h4>Volume</h4></div>
                                <div className='col-2'><p>+10db</p></div>
                            </div>
                            <RangeSlider value={value} onInput={onChange} min={-100} max={100} />

                        </Card>
                        <Card className='speedSc p-2'>
                            <div className='row mt-2' style={{ textAlign: "center" }}>
                                <div className='col-2'><p>Slow</p></div>
                                <div className='col-8'><h4>Speed</h4></div>
                                <div className='col-2'><p>Fast</p></div>
                            </div>
                            <RangeSlider value={value1} onInput={onChange1} min={-100} max={100} />

                        </Card>
                    </div>
                    <div className='col-2'>
                        <Card className='pitch mt-2'>
                            <h4 style={{ textAlign: 'center', marginTop: "10px" }}>Pitch</h4>
                            <RangeSlider value={value2} onInput={onChange2} className="vertical-slider newvertical" orientation={"vertical"} min={-100} max={100} />
                        </Card>
                    </div>
                </div>
            </div>
            <div className={`col-${screenWidth > 1600 ? 6 : (screenWidth > 10 ? 12 : 12)}`}>
                <div className='screenimage'>
                    <img src={require(`assets/image/Voice/screen.png`)} alt="" />
                </div>
                <div className='row mt-5' style={{ textAlign: "center", color: "white", fontSize: "2vh" }}>
                    <div className='col-2'><i className='tim-icons icon-volume-98'></i></div>
                    <div className='col-8'><div>
                        Original Size
                        <i className='tim-icons icon-minimal-down ml-3'></i>
                    </div></div>
                    <div className='col-2'><i className='tim-icons icon-tv-2'></i></div>
                </div>
            </div>
            <div className='col-12'>
                <Card className='workcd  mt-2'>
                    <CardHeader className='Workplaceheadbar'>
                        <div>
                            <FontAwesomeIcon className='mr-3' icon={faReply} />
                            <FontAwesomeIcon className='mr-3' icon={faShare} />
                            <i className='tim-icons icon-trash-simple'></i>
                        </div>
                        <div>
                            <time className=' mr-3'>00:00:05</time>
                            <i className='tim-icons icon-triangle-right-17 mr-3' color='red'></i>
                            <time>00:00:14</time>
                        </div>
                        <div style={{display: "flex"}}>
                            <i className='tim-icons icon-simple-delete mr-3'></i>
                            <input className='custom-range mr-3' type="range" min="0" max="100%" ></input>
                            <i className='tim-icons icon-simple-add mr-3'></i>
                        </div>

                    </CardHeader>
                    <hr className='ml-4' size="10" width="96%" color="#324250" align="center" />
                    <CardBody className='mainworkplace content'>
                        <div className='workarray'>
                            <FontAwesomeIcon className='mr-3 bac' icon={faEye} />
                            <i className='tim-icons icon-sound-wave mr-3'></i>
                            <Card style={{ width: "50%" }} className='soundbar mr-2 mb-2'>
                                <img src={require("assets/image/bar1.png")} alt="..."></img>
                            </Card>
                            <Card style={{
                                background: "#324250", width: "40px", height: "40px", display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                top: "20%"
                            }}><p style={{ margin: "1px" }}>+</p></Card>

                        </div>
                        <div>
                            <div className='workarray'>
                                <FontAwesomeIcon className='mr-3 bac' icon={faEye} />
                                <i className='tim-icons icon-volume-98 mr-3'></i>
                                <Card style={{ width: "70%" }} className='soundbar mb-2'>
                                    <img src={require("assets/image/bar2.png")} alt="..."></img>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className='workarray'>
                                <FontAwesomeIcon className='mr-3 bac' icon={faEye} />
                                <i className='tim-icons icon-triangle-right-17 mr-3'></i>
                                <Card style={{
                                    width: "80%", display: "flex",
                                    flexDirection: "row"
                                }} className='soundbar mb-2'>
                                    <img src={require("assets/image/Voice/screen.png")} style={{ width: "8%", paddingTop: "3%" }} className='mr-1' alt="..."></img>
                                    <img src={require("assets/image/Voice/screen.png")} style={{ width: "8%", paddingTop: "3%" }} className='mr-1' alt="..."></img>
                                    <img src={require("assets/image/Voice/screen.png")} style={{ width: "8%", paddingTop: "3%" }} className='mr-1' alt="..."></img>
                                    <img src={require("assets/image/Voice/screen.png")} style={{ width: "8%", paddingTop: "3%" }} className='mr-1' alt="..."></img>
                                    <img src={require("assets/image/Voice/screen.png")} style={{ width: "8%", paddingTop: "3%" }} className='mr-1' alt="..."></img>
                                </Card>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default Voice;
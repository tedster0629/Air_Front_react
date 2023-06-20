import React, { useState } from 'react';

import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { English } from './Project/English';
import { Rachel } from './Project/Rachel';
import { Joyful } from './Project/Joyful';
import { Translate } from './Project/Translated';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare } from '@fortawesome/free-solid-svg-icons'


const Voice = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const handleNavClick = (eventKey) => {
        setActiveNavItem(eventKey);
    }
    return (
        <div className='content row'>
            <div className='col-6'>
                <Card className='Projectdes'>
                    <CardHeader>
                        <Nav justify variant="tabs" defaultActiveKey="English">
                            <NavItem>
                                <NavLink className='navclass' eventKey="English" onClick={() => handleNavClick("English")}>
                                    <i className="tim-icons icon-caps-small mr-2 iconcolor"></i>
                                    <p>English (UK)</p>
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
                    </CardHeader>
                    <CardBody style={{ overflow: "auto" }}>

                        {activeNavItem === 'English' && <English></English>}
                        {activeNavItem === 'Rachel' && <Rachel></Rachel>}
                        {activeNavItem === 'Joyful' && <Joyful></Joyful>}
                        {activeNavItem === 'Translate' && <Translate></Translate>}
                    </CardBody>


                    <CardFooter>
                        <hr size="10" width="96%" color="#324250" align="center" />
                        <Button className="btn" color="" style={{ float: "left" }}>
                            + Preview
                        </Button>
                        <Button className="btn" color="primary" style={{ float: "left" }}>
                            + Add to Timeline
                        </Button>
                        <Button className="btn" color="" style={{ float: "right" }}>
                            Next <i className='ml-2 tim-icons icon-minimal-right'></i>
                        </Button>
                    </CardFooter>
                </Card>
                <div className='row' style={{ alignItems: "center" }}>
                    <div className='col-10'>
                        <Card className='dbscroll'>
                            <div className='row mt-2' style={{ textAlign: "center" }}>
                                <div className='col-2'><p>-10db</p></div>
                                <div className='col-8'><h4>Volume</h4></div>
                                <div className='col-2'><p>+10db</p></div>
                            </div>
                            <input type="range" min="0" max="100%" ></input>
                        </Card>
                        <Card className='speedSc'>
                            <div className='row mt-2' style={{ textAlign: "center" }}>
                                <div className='col-2'><p>Slow</p></div>
                                <div className='col-8'><h4>Speed</h4></div>
                                <div className='col-2'><p>Fast</p></div>
                            </div>
                            <input type="range" min="0" max="100%" ></input>

                        </Card>
                    </div>
                    <div className='col-2'>
                        <Card className='pitch'>
                            <h4 style={{ textAlign: 'center', marginTop: "10px" }}>Pitch</h4>
                            <input style={{ height: "70%" }} className='verticalRange' type='range' min="0" max="100%" ></input>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='screenimage'>
                    <img src={require(`assets/image/Voice/screen.png`)} alt="" />
                </div>
                <div className='row mt-5' style={{ textAlign: "center", color : "white", fontSize : "2vh" }}>
                    <div className='col-2'><i className='tim-icons icon-volume-98'></i></div>
                    <div className='col-8'><div>
                        Original Size
                        <i className='tim-icons icon-minimal-down ml-3'></i>
                    </div></div>
                    <div className='col-2'><i className='tim-icons icon-tv-2'></i></div>
                </div>
            </div>
            <div className='col-12'>
                <Card className='workcd'>
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
                        <div>
                            <i className='tim-icons icon-simple-delete mr-3'></i>
                            <input className=' mr-3' type="range" min="0" max="100%" ></input>
                            <i className='tim-icons icon-simple-add mr-3'></i>
                        </div>

                    </CardHeader>
                    <hr className='ml-4' size="10" width="96%" color="#324250" align="center" />
                    <CardBody>
                        <div></div>
                        <div></div>
                        <div></div>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default Voice;
import React, { useState } from 'react';

import { Button, Card, CardBody, CardFooter } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { English } from './Project/English';
import { Rachel } from './Project/Rachel';
import { Joyful } from './Project/Joyful';
import { Translate } from './Project/Translated';


const Voice = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');
    const handleNavClick = (eventKey) => {
        setActiveNavItem(eventKey);
    }
    return (
        <div className='content'>
            <Card className='Projectdes'>
                <CardBody style={{overflow: "auto"}}>
                    <div>
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
                    </div>
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
            <Card className='dbscroll'>
                <div className='dbtext mt-2'>
                    <p>-10db</p>
                    <h4>Volume</h4>
                    <p>+10db</p>
                </div>
                <input type="range" min="0" max="100%" ></input>
            </Card>
            <Card className='speedSc'>
                <div className='dbtext mt-2'>
                    <p>Slow</p>
                    <h4>Speed</h4>
                    <p>Fast</p>
                </div>
                <input type="range" min="0" max="100%" ></input>
            </Card>
            <Card className='pitch'>
                <input className='mt-2 verticalRange' type='range' min="0" max="100%" ></input>
            </Card>
            <Card className='workcd'>

            </Card>
            <img className='screenimage' src={require(`assets/image/Voice/screen.png`)} alt = "" />
        </div>
    )
}

export default Voice;
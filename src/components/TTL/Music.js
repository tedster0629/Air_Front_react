import React from 'react';

import { Card, CardBody, CardHeader } from 'reactstrap';
// import { Nav, NavItem, NavLink } from 'react-bootstrap';
// import { English } from './Project/English';
// import { Rachel } from './Project/Rachel';
// import { Joyful } from './Project/Joyful';
// import { Translate } from './Project/Translated';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare } from '@fortawesome/free-solid-svg-icons'

function Music() {
    return (
        <div className='content row'>
            <div className='col-6'>
                <Card className='Projectdes'>

                </Card>
                <div className='row'>
                    <div className='col-6'>
                        <Card style={{ height: "18.5vh" }}>
                            <div className='mt-4'><h4 style={{ textAlign: "center" }}>Volume</h4></div>
                            <input className='mt-4' type="range" min="0" max="100%" ></input>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card style={{height: "18.5vh",width: "100%"}}>
                            <div style={{
                                
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}  className='mt-2'>
                                <div>
                                    <p style={{ fontSize: "20px" }}>Fade In</p>
                                    <p>Duration : <span style={{ color: "red" }}>3 seconds</span></p>
                                </div>
                                <label class="switch mt-2">
                                    <input type="checkbox"  />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        <hr className='ml-1' size="10" width="96%" color="#324250" align="center" />
                        <div style={{
                                
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }} >
                                <div>
                                    <p style={{ fontSize: "20px" }}>Fade Out</p>
                                    <p>Duration : <span style={{ color: "red" }}>3 seconds</span></p>
                                </div>
                                <label class="switch mt-2">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
            <div className='col-6'>
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

export default Music;
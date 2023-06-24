import React, { useState, useEffect } from 'react';

import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
// import { Button } from 'react-bootstrap';
// import { English } from './Project/English';
// import { Rachel } from './Project/Rachel';
// import { Joyful } from './Project/Joyful';
// import { Translate } from './Project/Translated';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons'

function Music() {

    // const [activeNavItem, setActiveNavItem] = useState('home');
    // const handleNavClick = (eventKey) => {
    //     setActiveNavItem(eventKey);
    // }

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [activeButton, setActiveButton] = useState(null);

    function activateButton(buttonName) {
        setActiveButton(buttonName);
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

    const MusicCardData = [
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (1).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (2).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (3).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (4).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (5).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (6).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (7).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (8).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (9).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (10).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (11).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (12).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (13).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (14).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (15).png" },
        { name: "Music Name", time: "1:54", image: "Rectangle 119 (16).png" },
    ]

    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <div className='content row'>
            <div className={`col-${screenWidth > 1600 ? 6 : (screenWidth > 10 ? 12 : 12)}`} >
                <Card className='Projectdes mb-2'>
                    <CardHeader style={{ display: "flex" }}>
                        <div className='col-9'>
                            <div id="carouselExampleControls" className="carousel slide " data-interval="false">
                                <button className="carousel-control-prev carouselbutton mt-2" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <div className="carousel-inner ml-4">
                                    <div className="carousel-item active">
                                        <div style={{ display: "flex" }}>
                                            <button name="Popular" onClick={() => activateButton("Popular")}
                                                className={activeButton === "Popular" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>Popular</p>
                                            </button>
                                            <button name="Epic" onClick={() => activateButton("Epic")}
                                                className={activeButton === "Epic" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>Epic</p>
                                            </button>
                                            <button name="Dreamy" onClick={() => activateButton("Dreamy")}
                                                className={activeButton === "Dreamy" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>Dreamy</p>
                                            </button>
                                            <button name="Native" onClick={() => activateButton("Native")}
                                                className={activeButton === "Native" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>Native</p>
                                            </button>
                                            <button name="Pop" onClick={() => activateButton("Pop")}
                                                className={activeButton === "Pop" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>Pop</p>
                                            </button>
                                            <button name="TikTok" onClick={() => activateButton("TikTok")}
                                                className={activeButton === "TikTok" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                                <p className='mr-2 ml-2'>TikTok</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <button name="Rock" onClick={() => activateButton("Rock")}
                                            className={activeButton === "Rock" ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                                            <p className='mr-2 ml-2'>Rock</p>
                                        </button>
                                    </div>
                                </div>
                                <button className="carousel-control-next carouselbutton mt-2" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-3 mt-2'>
                            <div className="mainsearch">
                                <div className="form-group has-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="scrollbar pl-2 pr-4" id="style-1" style={{overflow : "auto"}} >
                        {/* {activeNavItem === 'English' && <English></English>}
                        {activeNavItem === 'Rachel' && <Rachel></Rachel>}
                        {activeNavItem === 'Joyful' && <Joyful></Joyful>}
                        {activeNavItem === 'Translate' && <Translate></Translate>} */}
                        <div>
                            <Row>
                                {MusicCardData.map((data, index) => (
                                    <MusicCard key={index} image={data.image} name={data.name} time={data.time} showButton={hoverIndex === index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(-1)} />
                                ))}
                            </Row>
                        </div>
                    </CardBody>
                </Card>
                <div className='row  mb-2'>
                    <div className={`col-${screenWidth > 515 ? 6 : 12} mb-2`}>
                        <Card className='p-4' style={{ height: "18.5vh" }}>
                            <div className='mt-4'><h4 style={{ textAlign: "center" }}>Volume</h4></div>
                            <input className='custom-range mt-4' type="range" min="0" max="100%" ></input>
                        </Card>
                    </div>
                    <div className={`col-${screenWidth > 515 ? 6 : 12}`}>
                        <Card className='p-2 ' style={{ height: "18.5vh", width: "100%" }}>
                            <div style={{

                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }} className='mt-2'>
                                <div style={{ opacity: !isChecked ? "1" : "0.5" }}>
                                    <p style={{ fontSize: "20px" }}>Fade In</p>
                                    <p>Duration : <span style={{ color: "red" }}>3 seconds</span></p>
                                </div>
                                <label className="switch mt-2">
                                    <input type="checkbox" checked={!isChecked} onChange={handleToggle} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <hr className='ml-1' size="10" width="96%" color="#324250" align="center" />
                            <div style={{

                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }} >
                                <div style={{ opacity: isChecked ? "1" : "0.5" }}>
                                    <p style={{ fontSize: "20px" }}>Fade Out</p>
                                    <p>Duration : <span style={{ color: "red" }}>3 seconds</span></p>
                                </div>
                                <label className="switch mt-2">
                                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
            <div className={`col-${screenWidth > 1600 ? 6 : (screenWidth > 10 ? 12 : 12)}`} >
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
                        <div style={{ display: "flex" }}>
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
                                <Card style={{ width: "70%" }} className='soundbar  mb-2'>
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
                                }} className='soundbar  mb-2'>
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

function MusicCard(props) {
    const style = {
        boxSizing: 'border-box',
        width: '182px',
        height: '48px',
        border: '1px solid #415362',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "pointer",
    }

    const newStyle = {
        boxSizing: 'border-box',
        width: '182px',
        height: '48px',
        border: '1px solid #415362',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "pointer",
        background: "linear-gradient(90deg, #FF828E 22.33%, #FF394C 107.14%)",
    }

    const styledPlayIcon = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    }

    const styledImage = {
        width: '22px',
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '12px',
        position: 'relative',
    }

    const styledButton = {
        width: "20px",
        height: "20px",
        minWidth: "20px",
        padding: "2px",
        marginTop: "14px",
        marginBottom: "14px",
        marginRight: "12px",
        backgroundColor: "white",
        backgroundImage: "none",
        color: "#DF1642",
        "&:hover": {
            backgroundColor: "white !important",
            backgroundImage: "none",
        },
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
        <Col className={`col-${screenWidth > 1850 ? 3 : (screenWidth > 610 ? 4 : (screenWidth > 415 ? 6 : 12))} `} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            {props.showButton ? (
                <Card className="mt-2" style={newStyle}>
                    <div style={styledImage}>
                        <img src={require(`assets/image/Music/${props.image}`)} alt="error" ></img>
                        <FontAwesomeIcon className='mr-3' icon={faPlay} style={styledPlayIcon} />
                    </div>
                    <div>
                        <p>
                            {props.name}
                            <br />
                            {props.time}
                        </p>
                    </div>

                    <div>
                        <button type="button" class="btn btn-outline-primary" style={styledButton}><FontAwesomeIcon icon={faPlus}  /></button>
                    </div>
                </Card>) : (
                <Card className="RachelCard mt-2" style={style}>
                    <div style={styledImage}>
                        <img src={require(`assets/image/Music/${props.image}`)} alt="error" ></img>
                    </div>
                    <div>
                        <p>
                            {props.name}
                            <br />
                            {props.time}
                        </p>
                    </div>
                    <div style={{ visibility: "hidden" }}>
                        <button type="button" class="btn btn-outline-primary" style={styledButton}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </Card>
            )
            }

        </Col>
    );
}

export default Music;
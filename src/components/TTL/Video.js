import React, { useState } from "react";

import { Button, Card, CardBody, CardHeader } from 'reactstrap';
// import { Nav, NavItem, NavLink } from 'react-bootstrap';
// import { English } from './Project/English';
// import { Rachel } from './Project/Rachel';
// import { Joyful } from './Project/Joyful';
// import { Translate } from './Project/Translated';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Video() {

    const Videocard = [
        {
            img: "1.png",
            time: "01:52"
        },
        {
            img: "2.png",
            time: "01:52"
        },
        {
            img: "3.png",
            time: "01:52"
        },
        {
            img: "4.png",
            time: "01:52"
        },
        {
            img: "5.png",
            time: "01:52"
        },
        {
            img: "6.png",
            time: "01:52"
        },

        {
            img: "7.png",
            time: "01:52"
        }, {
            img: "8.png",
            time: "01:52"
        },
        {
            img: "9.png",
            time: "01:52"
        },
        {
            img: "10.png",
            time: "01:52"
        },
        {
            img: "11.png",
            time: "01:52"
        },
        {
            img: "12.png",
            time: "01:52"
        },
        { img: "13.png", time: "01:52" },
        { img: "14.png", time: "01:52" },
        { img: "15.png", time: "01:52" },
        {
            img: "1.png",
            time: "01:52"
        },
        {
            img: "2.png",
            time: "01:52"
        },
        {
            img: "3.png",
            time: "01:52"
        },
        {
            img: "4.png",
            time: "01:52"
        },
        {
            img: "5.png",
            time: "01:52"
        },
        {
            img: "6.png",
            time: "01:52"
        },

        {
            img: "7.png",
            time: "01:52"
        }, {
            img: "8.png",
            time: "01:52"
        },
        {
            img: "9.png",
            time: "01:52"
        },
        {
            img: "10.png",
            time: "01:52"
        },
        {
            img: "11.png",
            time: "01:52"
        },
        {
            img: "12.png",
            time: "01:52"
        },
        { img: "13.png", time: "01:52" },
        { img: "14.png", time: "01:52" },
        { img: "15.png", time: "01:52" },

    ]

    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <div className='content row'>
            <div className='col-6'>
                <Card className='Videocard p-3' style={{overflow : "auto",}}>
                    <div className='content row'>
                        {Videocard.map((data, index) => (
                            <VideoCard key={index} img={data.img} showButton={hoverIndex === index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(-1)} />
                        ))}
                    </div>
                </Card>
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

function VideoCard(props) {
    return (
        <div className='col-xl-3 col-lg-6 col-xs-12 mb-2' onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <img src={require(`assets/image/Video/${props.img}`)} alt="TTTTTTTTTTTTTTTTTTTTTTTT"></img>
            {props.showButton &&

                <div style={{ width: "100%", position: "relative" }}>
                    <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
                        <div style={{ padding: "8px" }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <sapn style={{ color: "white" }}>1:34</sapn>
                                <Button color="primary" style={{
                                    width: "20px",
                                    height: "20px",
                                    minWidth: "20px",
                                    padding: "2px"
                                }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}

export default Video;
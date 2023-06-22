import { Row } from 'react-bootstrap';
import React, { useState } from 'react';

export const Joyful = () => {

    const JoyfulCardData = [
        {
            title: "Default",
            icon: "",
        },
        {
            title: "Empathic",
            icon: "",
        },
        {
            title: "Soft",
            icon: "",
        },
        {
            title: "Default",
            icon: "",
        },
        {
            title: "Default",
            icon: "",
        },
        {
            title: "Empathic",
            icon: "",
        },
        {
            title: "Soft",
            icon: "",
        },
        {
            title: "Default",
            icon: "",
        },
        {
            title: "Default",
            icon: "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title: "Empathic",
            icon: "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title: "Soft",
            icon: "",
        },
        {
            title: "Default",
            icon: "",
        },
        {
            title: "Default",
            icon: "tim-icons icon-alert-circle-exc mr-2",
        },
        {
            title: "Empathic",
            icon: "",
        },
        {
            title: "Soft",
            icon: "",
        },
    ]

    const [activeButton, setActiveButton] = useState(null);

    function activateButton(buttonName) {
        setActiveButton(buttonName);
    }
    return (
        <Row>
            {JoyfulCardData.map((data, idx) => (
                <div key={idx}>
                    <button name = {idx} onClick={() => activateButton(idx)}
                        className={activeButton === idx ? 'activebuttonclick mt-2 mr-2' : 'joyfulcard mt-2 mr-2'}>
                        <p className='mr-2 ml-2'>{data.title}</p>
                        <i className={data.icon} style={{ color: "white" }}></i>
                    </button>
                </div>
            ))}
        </Row>
    );

}

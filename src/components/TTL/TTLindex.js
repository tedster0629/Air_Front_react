import React from "react";
import { Route, Routes } from "react-router-dom";
import Voice from "./Voice";

function TTLindex () {
    return(
        <Routes>
            <Route path="/" Component={Voice}></Route>  
        </Routes>
    )
}
import React from 'react';
import BottomBar from '../../components/bottomBar/bottomBar';
import img from "../../assets/fav.svg"
import { FaLaptopCode } from "react-icons/fa";

const Favorite = () => {
    return (
        <div>
            <h2 style={{ margin: "2rem", fontFamily: 'Raleway', color: "#61DBFB" }}>This project by Programmer Tabarak<FaLaptopCode style={{
                color: "#61DBFB", width: "50px", hight: "40px"
            }} /> </h2>
            <img src={img} style={{ width: "100%", marginTop: "2rem", }} />
            <p>@all copyRight by Pr.Tabarak</p>
            <BottomBar />
        </div>
    );
}

export default Favorite;

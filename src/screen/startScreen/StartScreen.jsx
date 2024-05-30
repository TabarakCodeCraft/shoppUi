import React from 'react';
import style from "./start.module.css"
import img from "../../assets/pic1.svg"
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const StartScreen = () => {

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate("/create-account");
    };

    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <>
            <div className='app-container'>
                <div className={style.center}>
                    <div className={style.ellipis}>
                        <img src={img} className={style.image} /></div>
                </div>
                <div className={style.text}>
                    <h1 className={style.shop}>Shoppe</h1>
                    <p className={style.beauti}> Beautiful eCommerce UI Kit<br /> for your online store</p>
                </div>
                <div className={style.actionContainer}>
                    <div className='app-container'>
                        <div className={style.actions}>
                            <button className={style.btn} onClick={handleCreateAccount}>Let's get started</button>
                            <div className={style.haveAccount}>

                                <p className={style.textAccount} onClick={handleLogin}>
                                    I already have an account</p>
                                <FaArrowCircleRight className={style.arrow} onClick={handleLogin} />
                            </div>
                        </div>
                    </div>
                </div></div>
        </>

    );
}

export default StartScreen;

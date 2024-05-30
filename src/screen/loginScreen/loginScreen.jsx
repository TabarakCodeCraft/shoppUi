import React, { useState } from 'react';
import style from "./login.module.css";
import img1 from "../../assets/pic4.svg";
import img2 from "../../assets/pic5.svg";
import img3 from "../../assets/pic6.svg";
// import img4 from "../../assets/pic7.svg";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const LoginScreen = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleNext = () => {
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                username: "mor_2314",
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.token) {
                    navigate("/clothing");
                } else {
                    setError('Login failed. Please check your password and try again.');
                }
            })
            .catch(err => {
                console.error("Error:", err);
                setError('Login failed, try again.');
            });
    };

    const handleCancel = () => {
        navigate("/");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.topImg}>
                <img src={img1} className={style.img1} />
                <img src={img2} className={style.img2} />
            </div>
            <img src={img3} className={style.rightImg} />
            <div className={style.text}>
                <h2 className={style.title}>Login</h2>
                <p className={style.subTitle}>Good to see you back! <FaHeart /></p>
            </div>
            <div className={style.down}>
                <div className={style.inputEmail}>
                    <input
                        type="password"
                        placeholder='your password'
                        className={style.emailInput}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {error && <p className={style.error}>{error}</p>}
                <div className={style.actions}>
                    <button className={style.btn} onClick={handleNext}>Next</button>
                    <p className={style.cancel} onClick={handleCancel}>Cancel</p>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;

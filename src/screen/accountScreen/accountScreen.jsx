import React, { useState } from 'react';
import style from './account.module.css';
import pic2 from '../../assets/pic2.svg';
import pic from '../../assets/pic1.svg'
import pic3 from '../../assets/pic3.svg';
import { CiCamera } from 'react-icons/ci';
import { FaRegEyeSlash, FaEye } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

const AccountScreen = () => {
    const [uploadPhoto, setUploadPhoto] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleUploadPhoto = (e) => {
        setUploadPhoto(e.target.files[0]);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const Navigate = useNavigate();

    const handleDone = () => {
        Navigate("/clothing");
    }
    const handleCancel = () => {
        Navigate("/");
    }

    return (
        <>
            <div className={style.container}>
                <div className='app-container'>
                    <img src={pic3} className={style.img1} />
                    <img src={pic2} className={style.img2} />

                    <h2 className={style.title}>
                        Create
                        <br />
                        Account
                    </h2>


                    <div className={style.uploadPhoto}>
                        <div className={style.ciurcal}>
                            {uploadPhoto ? (
                                <img
                                    src={URL.createObjectURL(uploadPhoto)}
                                    className={style.uploadedImage}
                                    alt="Selected"
                                />
                            ) : (
                                <label htmlFor='fileInput'>
                                    <CiCamera className={style.camira} />
                                </label>
                            )}
                            <input
                                type="file"
                                id='fileInput'
                                style={{ display: 'none' }}
                                onChange={handleUploadPhoto}
                            />
                        </div>
                    </div>

                    <div className={style.inputs}>
                        <input
                            type="email"
                            placeholder='Email'
                            className={style.form}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className={style.password}>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder='Password'
                                className={style.form_pass}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {isPasswordVisible ? (
                                <FaEye className={style.icon} onClick={togglePasswordVisibility} />
                            ) : (
                                <FaRegEyeSlash className={style.icon} onClick={togglePasswordVisibility} />
                            )}
                        </div>

                        <PhoneInput
                            placeholder='Your Number'
                            country={'us'}
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            containerClass={style.phoneContainer}
                            inputClass={style.phoneInput}
                            buttonClass={style.flagDropdown}
                            dropdownClass={style.flagDropdownMenu}
                        />

                        <div className={style.containerActions}>
                            <div className={style.actions}>

                                <button className={style.btn} onClick={handleDone}>Done</button>
                                <p className={style.cancel} onClick={handleCancel}>Cancel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountScreen;

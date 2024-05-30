import React from 'react';
import style from "../successModal/successModal.module.css";
import { FaCheckCircle } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={style.modalBackdrop}>
            <div className={style.modalContent}>
                <div className={style.iconContainer}>
                    <FaCheckCircle className={style.successIcon} />
                </div>
                <h2>Done!</h2>
                <p>Your card has been successfully charged</p>
                <button className={style.btn} onClick={onClose}>Track My Order</button>
            </div>
        </div>
    );
};

export default SuccessModal;

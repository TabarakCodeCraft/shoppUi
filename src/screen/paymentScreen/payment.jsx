import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from "./payment.module.css";
import edit from "../../assets/edit.svg";
import { IoClose } from 'react-icons/io5';
import { FaCheckCircle } from "react-icons/fa";
import Modal from '../../components/modal/modal';
import ModalEdit from '../../components/modalEdit/modalEdit';
import BottomBar from '../../components/bottomBar/bottomBar';
import SuccessModal from "../../components/successModal/successModal";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedShipping, setSelectedShipping] = useState('');
    const [isEditModal, setEditModal] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [voucher, setVoucher] = useState(null);
    const [isSuccessModal, setIsSuccessModal] = useState(false);

    const cartItems = location.state?.cartItems || [];
    const [address, setAddress] = useState({
        addressLine: '26, Duong So 2, An Phu, Ho Chi Minh city',
        city: 'Ho Chi Minh city',
        postcode: '444tota'
    });

    const handleShippingChange = (option) => {
        setSelectedShipping(option);
    };

    const handleApplyVoucher = (voucher) => {
        setVoucher(voucher);
    };

    const handleRemoveVoucher = () => {
        setVoucher(null);
    };

    const handleEditAddress = (newAddress) => {
        setAddress(newAddress);
        setEditModal(false);
    };

    const handlePay = () => {
        setIsSuccessModal(true);
    };

    return (
        <div className={style.container}>
            <div className={`${style.main} ${isModalOpen || isEditModal ? style.mainBlurred : ''}`}>
                <div className={style.title}><h2 className={style.titleH2}>Payment</h2></div>
                <div className={style.address}>
                    <div className={style.shipping}>
                        <h2>Shipping Address</h2>
                        <p>{address.addressLine}, {address.city}, {address.postcode}</p>
                    </div>
                    <img src={edit} className={style.edit} onClick={() => setEditModal(true)} />
                </div>
                <div className={style.item}>
                    <div className={style.text}>
                        <h2>Items</h2>
                        <div className={style.num}>{cartItems.length}</div>
                    </div>
                    {voucher ? (
                        <button
                            className={`${style.add} ${style.discountBtn}`}
                            onClick={handleRemoveVoucher}
                        >
                            {voucher} <IoClose className={style.IoClose} />
                        </button>
                    ) : (
                        <button
                            className={style.add}
                            onClick={() => setModalOpen(true)}
                        >
                            Add Voucher
                        </button>
                    )}
                </div>
                {cartItems.map(item => (
                    <div key={item.id} className={style.items}>
                        <div className={style.right}>
                            <div>
                                <div className={style.imgNum}>{item.id}</div>
                                <div className={style.borderImg}>
                                    <img src={item.image} className={style.img} alt={item.name} />
                                </div>
                            </div>
                            <div className={style.description}>{item.description}</div>
                        </div>
                        <div className={style.left}>${item.price.toFixed(2)}</div>
                    </div>
                ))}
                <div className={style.options}>
                    <div className={style.titleOption}><h2>Shipping Options</h2></div>
                    <div
                        className={`${style.standard} ${selectedShipping === 'standard' ? style.active : ''}`}
                        onClick={() => handleShippingChange('standard')}
                    >
                        <div className={style.sLeft}>
                            <FaCheckCircle
                                className={`${style.checkbox} ${selectedShipping === 'standard' ? style.checked : ''}`}
                            />
                            <label>Standard</label>
                            <div className={style.days}><h3>5-7 days</h3></div>
                        </div>
                        <div className={style.sRight}>
                            <h3>FREE</h3>
                        </div>
                    </div>
                    <div
                        className={`${style.express} ${selectedShipping === 'express' ? style.active : ''}`}
                        onClick={() => handleShippingChange('express')}
                    >
                        <div className={style.sLeft}>
                            <FaCheckCircle
                                className={`${style.checkbox} ${selectedShipping === 'express' ? style.checked : ''}`}
                            />
                            <label>Express</label>
                            <div className={style.days}><h3>2-3 days</h3></div>
                        </div>
                        <div className={style.sRight}>
                            <h3>$10</h3>
                        </div>
                    </div>
                </div>
                <div className={style.total}>
                    <div className={style.price}>
                        <h2>Total</h2>
                        <p>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                    </div>
                    <div className={style.checkout}>
                        <button className={style.btn} onClick={handlePay}>Pay</button>
                    </div>
                </div>
                <BottomBar />
                <Modal isOpen={isModalOpen} setOpen={setModalOpen} onApplyVoucher={handleApplyVoucher} />
                <ModalEdit isOpenModal={isEditModal} setOpenModal={setEditModal} address={address} onSave={handleEditAddress} />
                <SuccessModal isOpen={isSuccessModal} onClose={() => setIsSuccessModal(false)} />
            </div>
        </div>
    );
}

export default Payment;

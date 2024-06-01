import React, { useState, useEffect } from 'react';
import style from './cart.module.css';
import { useNavigate } from 'react-router-dom';
import edit from "../../assets/edit.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import BottomBar from '../../components/bottomBar/bottomBar';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedItems);
    }, []);

    const incrementQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const decrementQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleDelete = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate("/payment", { state: { cartItems } });
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.title}>
                    <h2 className={style.cart}>Cart</h2>
                    <div className={style.number}>{cartItems.length}</div>
                </div>

                <div className={style.address}>
                    <div className={style.shipping}>
                        <h2>Shipping Address</h2>
                        <p>26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city</p>
                    </div>
                    <div className={style.edit}><img src={edit} alt="Edit" /></div>
                </div>

                {cartItems.map(item => (
                    <div key={item.id} className={style.sallerCard}>
                        <div className={style.left}>
                            <RiDeleteBin6Line className={style.deletIcon} onClick={() => handleDelete(item.id)} />
                            <img src={item.image} className={style.imgCart} alt={item.title} />
                        </div>
                        <div className={style.right}>
                            <div className={style.desc}>
                                <p className={style.descP}>{item.description}</p>
                                <h3 className={style.desch3}>{item.title}, Size {item.selectedSize}</h3>
                            </div>
                            <div className={style.footerCard}>
                                <h2 className={style.priceH2}>${item.price}</h2>
                                <div className={style.qty}>
                                    <div className={style.calclaut}>
                                        <div className={style.calc} onClick={() => decrementQuantity(item.id)}>-</div>
                                        <div className={style.number}>{item.quantity}</div>
                                        <div className={style.calc} onClick={() => incrementQuantity(item.id)}>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={style.total}>
                    <div className={style.price}>
                        <h2>Total</h2>
                        <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                    </div>
                    <div className={style.checkout}>
                        <button className={`${style.btn} ${cartItems.length === 0 ? style.disabledBtn : ''}`}
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0}
                        >Checkout</button>
                    </div>
                </div>

                <BottomBar />
            </div>
        </>
    );
};

export default Cart;

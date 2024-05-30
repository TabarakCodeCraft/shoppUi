import React, { useState } from 'react';
import style from './cart.module.css';
import { AiOutlineHome } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import edit from "../../assets/edit.svg"
import img from "../../assets/img/cartImg.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import BottomBar from '../../components/bottomBar/bottomBar';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeIcon, setActiveIcon] = useState('');
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 17.01, description: "Lorem ipsum dolor sit amet consectetur.", size: "M", img: img },
        { id: 2, name: "Product 2", price: 17.23, description: "Lorem ipsum dolor sit amet consectetur.", size: "M", img: img }
    ]);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleDelete = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleIconClick = (icon) => {
        if (icon === 'cart') Navigate("/cart");
        if (icon === 'clothing') Navigate('/clothing');
    };

    const Navigate = useNavigate();
    const handleCheckout = () => {
        Navigate("/payment")
    }
// test
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
                    <div className={style.edit}><img src={edit} alt="" /></div>
                </div>

                {cartItems.map(item => (
                    <div key={item.id} className={style.sallerCard}>
                        <div className={style.left}>
                            <RiDeleteBin6Line className={style.deletIcon} onClick={() => handleDelete(item.id)} />
                            <img src={item.img} className={style.imgCart} />
                        </div>
                        <div className={style.right}>
                            <div className={style.desc}>
                                <p className={style.descP}>{item.description}</p>
                                <h3 className={style.desch3}>{item.name}, Size {item.size}</h3>
                            </div>
                            <div className={style.footerCard}>

                                <h2 className={style.priceH2}>${item.price}</h2>

                                <div className={style.qty}>
                                    <div className={style.calclaut}>
                                        <div className={style.calc} onClick={decrementQuantity}>-</div>
                                        <div className={style.number}>{quantity}</div>
                                        <div className={style.calc} onClick={incrementQuantity}>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={style.total}>
                    <div className={style.price}>
                        <h2>Total</h2>
                        <p>${cartItems.reduce((total, item) => total + item.price, 0)}</p>
                    </div>
                    <div className={style.checkout}>
                        <button className={style.btn} onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>

                <BottomBar />
            </div>
        </>
    );
};

export default Cart;

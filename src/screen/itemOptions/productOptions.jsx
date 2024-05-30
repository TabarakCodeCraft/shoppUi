import React, { useEffect, useState } from 'react';
import style from "./productOptions.module.css";
import { CiHeart } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';
import img from "../../assets/img/card1.png";
import img1 from "../../assets/img/imgOption.png"
import img2 from "../../assets/img/imgOption2.png"
import img3 from "../../assets/img/card3.png"
import img4 from "../../assets/img/imgOption3.png"

const ProductOptions = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [product, setProduct] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            });
    }, [productId]);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleSize = (size) => {
        setSelectedSize(size);
    };

    const navigate = useNavigate();
 
    const saveToLocalStorage = (item) => {
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(existingItems));
    };

    const handleCart = () => {
        const item = { ...product, quantity, selectedSize };
        saveToLocalStorage(item);
        // navigate("/cart");
    };

    const handleBuyNow = () => {
        const item = { ...product, quantity, selectedSize };
        saveToLocalStorage(item);
        navigate("/cart");
    };

    return (
        <>
          <div className={style.container}>
            <div className={style.product}>
                <img src={product.image} className={style.img} alt={product.title} />
            </div>
          
                <div className={style.options}>
                    <div>
                        <h2 className={style.colorOptions}>Color Options</h2>
                    </div>
                    <div className={style.imgOption}>
                        <img src={img} className={style.imgOpt} />
                        <img src={img1} className={style.imgOpt} />
                        <img src={img2} className={style.imgOpt} />
                        <img src={img3} className={style.imgOpt} />
                        <img src={img4} className={style.imgOpt} />
                        <img src={img} className={style.imgOpt} />
                        <img src={img1} className={style.imgOpt} />
                        <img src={img2} className={style.imgOpt} />
                        <img src={img3} className={style.imgOpt} />
                        <img src={img4} className={style.imgOpt} />
                    </div>
                    <div className={style.size}>
                        <h3 className={style.titleSize}>Size</h3>
                        <div className={style.selected}>
                            {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
                                <button
                                    key={size}
                                    className={`${style.btnSize} ${selectedSize === size ? style.selectedSize : ''}`}
                                    onClick={() => { handleSize(size); }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={style.quantity}>
                        <div><h3  className={style.titleQt}>Quantity</h3></div>
                        <div className={style.calculate}>
                            <div className={style.calc} onClick={decrementQuantity}>-</div>
                            <div className={style.number}>{quantity}</div>
                            <div className={style.calc} onClick={incrementQuantity}>+</div>
                        </div>
                    </div>

                    <div className={style.btnBar}>
                        <div className={style.fav}><CiHeart /></div>
                        <div className={style.btn}>
                
                                <button className={style.addBtn} onClick={handleCart}>Add to Cart</button>
                                <button className={style.buyBtn} onClick={handleBuyNow}>Buy now</button>
                               
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductOptions;

import React, { useState, useEffect } from 'react';
import style from "./clothing.module.css";
import { CiCamera } from "react-icons/ci";
import img from "../../assets/categories/cat1.png";
import img1 from "../../assets/categories/cat2.png";
import img2 from "../../assets/categories/cat3.png";
import img3 from "../../assets/categories/cat5.png";
import icon from "../../assets/icon.svg";
import { useNavigate } from 'react-router-dom';
import BottomBar from '../../components/bottomBar/bottomBar';

const ClothingPage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [activeImageIndex, setActiveImageIndex] = useState(null); // State to track the active image
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const images = [img, img1, img2, img3];

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json.slice(0, 10)));


        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setFilteredProducts(json); 
            });
    }, []);

    const handleOptions = (productId) => {
        navigate(`/product-option/${productId}`);
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
  
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase()) ||
            product.category.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    const handleCategoryClick = (category, index) => {
        setSelectedCategory(category);
        setActiveImageIndex(index); 
        const filtered = products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.top}>
                    <h2 className={style.shop}>Shop</h2>
                    <div className={style.searchTop}>
                        <input
                            type="search"
                            className={style.search}
                            placeholder='Search Clothing'
                            value={searchInput} // Bind search input value
                            onChange={handleSearch} // Update state on input change
                        />
                        <CiCamera className={style.ciCamera} />
                    </div>
                </div>

                <div className={style.categories}>
                    {categories.map((category, index) => (
                        <div key={index} className={style.cat} onClick={() => handleCategoryClick(category, index)}>
                            <div className={`${style.imgcategories} ${activeImageIndex === index ? style.active : ''}`}>
                                <div className={style.borderImg}></div>
                                <img src={images[index]} className={style.image} alt={category} />
                            </div>
                            <div className={style.titlecat}>{category}</div>
                        </div>
                    ))}
                </div>

                <div className={style.topItem}>
                    <h2 className={style.allItem}>{selectedCategory || 'All Items'}</h2>
                    <img src={icon} className={style.iconItem} alt="All Items Icon" />
                </div>

                <div className={style.item}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className={style.productCard}>
                            <div className={style.cardItem} onClick={() => handleOptions(product.id)}>
                                <div className={style.imgCard}>
                                    <div className={style.cardBorder}>
                                        <img src={product.image} className={style.imageCard} alt={product.title} />
                                    </div>
                                </div>
                            </div>
                            <div className={style.description}>
                                {product.title}
                            </div>
                            <div className={style.priceP}>
                                ${product.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BottomBar />
        </>
    );
}

export default ClothingPage;

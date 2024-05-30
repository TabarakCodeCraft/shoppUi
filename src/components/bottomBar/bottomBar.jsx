import React, { useState } from 'react';
import style from "../bottomBar/bottomBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdPaper } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const BottomBar = ({ customClassName }) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    // const handleIconClick = (icon) => {
    //     setActiveIcon(icon);
    //     if (icon === 'clothing') navigate("/clothing");
    //     if (icon === 'cart') navigate("/cart");
    //     if (icon === 'heart') navigate('/favorites');
    //     if (icon === 'paper') navigate('/paper');
    //     if (icon === 'vouchers') navigate('/vouchers');
    // };

    return (
        <main>
            <div className={`${style.FooterIcon} ${customClassName}`}>
                <AiOutlineHome
                    className={`${style.iconFooter} ${pathname === '/clothing' ? style.active : ''}`}
                    onClick={() => navigate('/clothing')}
                />
                <IoCartOutline
                    className={`${style.iconFooter} ${pathname === '/cart' ? style.active : ''}`}
                    onClick={() => navigate('/cart')}
                />
                <IoMdHeartEmpty
                    className={`${style.iconFooter} ${pathname === '/favorite' ? style.active : ''}`}
                    onClick={() => navigate('/favorite')}
                />
                <IoMdPaper
                    className={`${style.iconFooter} ${pathname === '/payment' ? style.active : ''}`}
                    onClick={() => navigate('/payment')}
                />
                <MdManageAccounts
                    className={`${style.iconFooter} ${pathname === '/vouchers' ? style.active : ''}`}
                    style={{ marginRight: "22px" }}
                    onClick={() => navigate('/vouchers')}
                />
            </div>
        </main>
    );
}

export default BottomBar;

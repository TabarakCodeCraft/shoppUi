import React from 'react';
import style from "../skeleton/skeleton.module.css";

export const categoriesSkeleton = () => {
    return (
        <div className={style.categoriesSkeleton}>
            <div className={style.skeletonImg}></div>
            <div className={style.skeletonText}></div>
        </div>
    );
}

export const ProductSkeleton = () => (
    <div className={style.skeletonProduct}>
        <div className={style.skeletonCard}></div>
        <div className={style.skeletonDescription}></div>
        <div className={style.skeletonPrice}></div>
    </div>
);
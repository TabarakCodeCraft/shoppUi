import React, { useState } from 'react';
import BottomBar from '../../components/bottomBar/bottomBar';
import style from "./vpochers.module.css"
import img from "../../assets/img/avatar.png";
import { IoSettingsOutline, IoGiftSharp } from "react-icons/io5";
import icon1 from "../../assets/vouchers/icon1.svg";
import icon2 from "../../assets/vouchers/icon2.svg";

const Vouchers = () => {
    const [activeTab, setActiveTab] = useState('active');

    return (
        <>
            <div className={style.container}>
                <div className={style.top}>
                    <div className={style.left}>
                        <div className={style.avatar}><img src={img} alt="avatar" /></div>
                        <h2>Vouchers</h2>
                    </div>
                    <div className={style.right}>
                        <img src={icon1} alt="icon1" />
                        <img src={icon2} alt="icon2" />
                        <div className={style.setting}><IoSettingsOutline className={style.iconS} /></div>
                    </div>
                </div>

                <div className={style.btnTop}>
                    <button
                        className={activeTab === 'active' ? style.active : style.inactive}
                        onClick={() => setActiveTab('active')}
                    >
                        Active Rewards
                    </button>
                    <button
                        className={activeTab === 'progress' ? style.active : style.inactive}
                        onClick={() => setActiveTab('progress')}
                    >
                        Progress
                    </button>
                </div>


                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={style.ticketContainer}>
                    <div className={style.card}>
                        <div className={style.headerCard}>
                            <h3>Voucher</h3>
                            <button className={style.valid}>Valid Until 5.16.20</button >
                        </div>
                        <div className={style.contentCard}>
                            <div className={style.rightCard}>
                                <div className={style.gift}>
                                    <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                    <h2>First Purchase</h2>
                                </div>
                                <p>5% off for your next order</p>
                            </div>
                            <div className={style.leftCard}>
                                <button className={style.btn}>Collected</button>
                            </div>
                        </div>
                    </div>

                </div>

                <BottomBar />
            </div>
        </>
    );
}

export default Vouchers;

import { Sheet } from 'react-modal-sheet';
import style from "./modal.module.css";
import BottomBar from "../bottomBar/bottomBar.jsx";
import { IoGiftSharp } from "react-icons/io5";

function Modal({ isOpen, setOpen, onApplyVoucher }) {
    return (
        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container className={style['react-modal-sheet-container']}>
                <Sheet.Header className={style.Header}>
                    <h2>Active Vouchers</h2>
                </Sheet.Header>
                <Sheet.Content>
                    <Sheet.Scroller>
                        <div className={style.ticketContainer}>
                            <div className={style.card}>
                                <div className={style.headerCard}>
                                    <h3>Voucher</h3>
                                    <button className={style.valid}>Valid Until 5.16.20</button></div>
                                <div className={style.contentCard}>
                                    <div className={style.right}>
                                        <div className={style.gift}>
                                            <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                            <h2>First Purchase</h2>
                                        </div>
                                        <div>
                                            <p>5% off for your next order</p>
                                        </div>
                                    </div>
                                    <div className={style.left}>
                                        <button className={style.btn} onClick={() => {
                                            onApplyVoucher("50% Discount");
                                            setOpen(false);
                                        }}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.ticketContainer}>
                            <div className={style.card}>
                                <div className={style.headerCard}>
                                    <h3>Voucher</h3>
                                    <button className={style.valid}>Valid Until 5.16.20</button></div>
                                <div className={style.contentCard}>
                                    <div className={style.right}>
                                        <div className={style.gift}>
                                            <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                            <h2>First Purchase</h2>
                                        </div>
                                        <div>
                                            <p>5% off for your next order</p>
                                        </div>
                                    </div>
                                    <div className={style.left}>
                                        <button className={style.btn} onClick={() => {
                                            onApplyVoucher("50% Discount");
                                            setOpen(false);
                                        }}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={style.ticketContainer}>
                            <div className={style.card}>
                                <div className={style.headerCard}>
                                    <h3>Voucher</h3>
                                    <button className={style.valid}>Valid Until 5.16.20</button></div>
                                <div className={style.contentCard}>
                                    <div className={style.right}>
                                        <div className={style.gift}>
                                            <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                            <h2>First Purchase</h2>
                                        </div>
                                        <div>
                                            <p>5% off for your next order</p>
                                        </div>
                                    </div>
                                    <div className={style.left}>
                                        <button className={style.btn} onClick={() => {
                                            onApplyVoucher("50% Discount");
                                            setOpen(false);
                                        }}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.ticketContainer}>
                            <div className={style.card}>
                                <div className={style.headerCard}>
                                    <h3>Voucher</h3>
                                    <button className={style.valid}>Valid Until 5.16.20</button></div>
                                <div className={style.contentCard}>
                                    <div className={style.right}>
                                        <div className={style.gift}>
                                            <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                            <h2>First Purchase</h2>
                                        </div>
                                        <div>
                                            <p>5% off for your next order</p>
                                        </div>
                                    </div>
                                    <div className={style.left}>
                                        <button className={style.btn} onClick={() => {
                                            onApplyVoucher("50% Discount");
                                            setOpen(false);
                                        }}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.ticketContainer}>
                            <div className={style.card}>
                                <div className={style.headerCard}>
                                    <h3>Voucher</h3>
                                    <button className={style.valid}>Valid Until 5.16.20</button></div>
                                <div className={style.contentCard}>
                                    <div className={style.right}>
                                        <div className={style.gift}>
                                            <div className={style.IoGiftSharp}><IoGiftSharp /></div>
                                            <h2>First Purchase</h2>
                                        </div>
                                        <div>
                                            <p>5% off for your next order</p>
                                        </div>
                                    </div>
                                    <div className={style.left}>
                                        <button className={style.btn} onClick={() => {
                                            onApplyVoucher("50% Discount");
                                            setOpen(false);
                                        }}>
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BottomBar />
                    </Sheet.Scroller>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onClick={() => setOpen(false)} />
        </Sheet>
    );
}

export default Modal;

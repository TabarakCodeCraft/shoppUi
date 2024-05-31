import { Sheet } from 'react-modal-sheet';
import style from "../editModal/moadlEdit.module.css"
import BottomBar from '../bottomBar/bottomBar';
import { useState } from 'react';

function ModalEdit({ isOpenModal, setOpenModal, address, setAddress, onSave }) {
  const [formValues, setFormValues] = useState(address);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSave = () => {
    onSave(formValues);
    setOpenModal(false);
  }

  return (
    <>

      <Sheet isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
        <Sheet.Container className={style['react-modal-sheet-container']}>
          <Sheet.Header className={style.header}>
            <h2>Shipping Address</h2>
          </Sheet.Header>
          <Sheet.Content>
            <div className={style.form}>

              <div className={style.inputs}>
                <p>Address</p>
                <input type="text"
                  name="addressLine"
                  value={formValues.addressLine}
                  onChange={handleChange}
                  className={style.input}
                />
              </div>
              <div className={style.inputs}>
                <p>Town / City</p>
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  className={style.input}
                />
              </div>
              <div className={style.inputs}>
                <p>Postcode</p>
                <input
                  type="text"
                  name="postcode"
                  value={formValues.postcode}
                  onChange={handleChange}
                  className={style.input}
                />
              </div>

            </div>
            <div className={style.btn}><button onClick={handleSave}>Save Changes</button></div>

            <BottomBar customClassName={style.modalBottomBar} />
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setOpenModal(false)} />
      </Sheet>
    </>
  );
}
export default ModalEdit;
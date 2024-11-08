import * as React from 'react';

import styles from './Modal.module.css';

interface IModalProps {
    children: React.ReactNode
}

const Modal = ({children}: IModalProps) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add('hide')
    }

     return (
      <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <span className={styles.closeIcon} onClick={closeModal}>
                <i className="bi bi-x-square-fill"></i>
            </span>
            <h2>Modal edit task</h2>
            {children}
        </div>
      </div>
    );
}

export default Modal
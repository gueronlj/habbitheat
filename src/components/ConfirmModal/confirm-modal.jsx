import styles from './confirm-modal.module.css';

const ComfirmModal = ({ onConfirm, setShowConfirm, targetId }) => {
   return(
      <div className={styles.overlay}>
         <div className={styles.container}>
            <p>This can't be undone. Are you sure you want to delete this habit?</p>
            <div className={styles.buttonContainer}>
               <button onClick={() => onConfirm(targetId)}>Confirm</button>
               <button onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
         </div>
      </div>
   )
};

export default ComfirmModal;
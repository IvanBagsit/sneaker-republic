import styles from "./AttachmentCard.module.css";

const AttachmentCard = ({ file }) => {
    return (
        <div className={styles.background}>
            <div className={styles.preview}>{file.name}</div>
            <div className={styles.title}>{file.name}</div>
        </div>
    );
};

export default AttachmentCard;

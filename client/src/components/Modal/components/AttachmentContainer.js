import AttachmentCard from "./AttachmentCard";
import styles from "./AttachmentContainer.module.css";

const AttachmentContainer = ({ attachments }) => {
    return (
        <div className={styles.background}>
            {attachments.map((file) => {
                return <AttachmentCard key={file.name} file={file} />;
            })}
        </div>
    );
};

export default AttachmentContainer;

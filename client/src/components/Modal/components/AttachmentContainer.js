import AttachmentCard from "./AttachmentCard";
import styles from "./AttachmentContainer.module.css";

const AttachmentContainer = ({ attachments }) => {
    return (
        <div className={styles.background}>
            {attachments.map((item, index) => {
                const { file, status, url } = item;
                return (
                    <AttachmentCard
                        key={file.name + index}
                        file={file}
                        status={status}
                        url={url}
                    />
                );
            })}
        </div>
    );
};

export default AttachmentContainer;

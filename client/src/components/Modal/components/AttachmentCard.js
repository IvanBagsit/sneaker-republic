import styles from "./AttachmentCard.module.css";
import DescriptionIcon from "@mui/icons-material/Description";

const AttachmentCard = ({ file, status, url }) => {
    const imageTypes = ["image/png", "image/jpeg", "image/jpg"];

    const isImage = (type) => {
        return imageTypes.includes(type.toLowerCase());
    };

    const thumbnail = () => {
        if (isImage(file.type)) {
            return (
                <img className={styles.thumbnail} src={url} alt="thumbnail" />
            );
        } else {
            return <DescriptionIcon />;
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.preview}>{thumbnail()}</div>
            <div className={styles.fileName}>{file.name}</div>
        </div>
    );
};

export default AttachmentCard;

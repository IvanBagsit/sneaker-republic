import styles from "./AttachmentCard.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import { Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const AttachmentCard = ({ file, status, url }) => {
    const imageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const pdfTypes = ["application/pdf"];

    const isImage = (type) => {
        return imageTypes.includes(type.toLowerCase());
    };

    const isPDF = (type) => {
        return pdfTypes.includes(type.toLowerCase());
    };

    const thumbnail = () => {
        if (isImage(file.type)) {
            return (
                <img className={styles.thumbnail} src={url} alt="thumbnail" />
            );
        } else if (isPDF(file.type)) {
            return <Viewer fileUrl={url} initialPage={0} />;
        } else {
            return <DescriptionIcon />;
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.overlay}></div>
            <div className={styles.preview}>{thumbnail()}</div>
            <div className={styles.fileName}>{file.name}</div>
        </div>
    );
};

export default AttachmentCard;

import styles from "./AttachmentCard.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import { Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const AttachmentCard = ({ file, status, url }) => {
    const imageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const pdfTypes = ["application/pdf"];

    const isImage = () => {
        return imageTypes.includes(file.type.toLowerCase());
    };

    const isPDF = () => {
        return pdfTypes.includes(file.type.toLowerCase());
    };

    const thumbnail = () => {
        if (isImage()) {
            return (
                <img className={styles.thumbnail} src={url} alt="thumbnail" />
            );
        } else if (isPDF()) {
            return (
                <div className={styles.pdfThumbnailContainer}>
                    <Viewer fileUrl={url} />;
                </div>
            );
        } else {
            return <DescriptionIcon />;
        }
    };

    return (
        <div className={styles.background}>
            <div className={isPDF() ? styles.previewPDF : styles.previewImage}>
                {thumbnail()}
            </div>
            <div className={styles.fileName}>{file.name}</div>
        </div>
    );
};

export default AttachmentCard;

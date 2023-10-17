import styles from "./Scrollbar.module.css";

const Scrollbar = ({ maxHeight, children }) => {
    return (
        <div className={styles.scrollbar} style={{ maxHeight: `${maxHeight}` }}>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default Scrollbar;

import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const FullPageLoader = ({ open, message }) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={open}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div style={{ marginBottom: "5%" }}>{message}</div>
                <CircularProgress color="inherit" />
            </div>
        </Backdrop>
    );
};

export default FullPageLoader;

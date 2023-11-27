import { DialogContentText, TextField } from "@mui/material";
import styles from "./CartFormDetails.module.css";
import { useSelector } from "react-redux";

const CartFormDetails = ({ handleCartFormDetails }) => {
    const grandTotal = useSelector((state) => state.cartSlice.grandTotal);
    const numberOfCartItems = useSelector(
        (state) => state.cartSlice.numberOfCartItem
    );
    const numberOfQuantities = useSelector(
        (state) => state.cartSlice.totalQuantities
    );

    return (
        <div>
            <div>
                <DialogContentText>
                    Number of Cart Item/s: {numberOfCartItems}
                </DialogContentText>
                <DialogContentText>
                    Total Quantity: {numberOfQuantities}
                </DialogContentText>
                <DialogContentText>
                    Grand Total: P{grandTotal}
                </DialogContentText>
            </div>
            <div>
                <TextField
                    label={"Full Name"}
                    variant="standard"
                    className={styles.textField}
                    style={{ marginTop: "2%" }}
                    fullWidth
                />
                <TextField
                    label={"Email"}
                    variant="standard"
                    className={styles.textField}
                    fullWidth
                />
                <TextField
                    label={"Contact Number"}
                    variant="standard"
                    className={styles.textField}
                    fullWidth
                />
                <TextField
                    label={"LBC Pickup Branch Address"}
                    variant="standard"
                    className={styles.textField}
                    fullWidth
                />
            </div>
        </div>
    );
};

export default CartFormDetails;

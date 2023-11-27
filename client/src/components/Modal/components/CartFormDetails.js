import { DialogContentText, TextField } from "@mui/material";
import styles from "./CartFormDetails.module.css";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

const CartFormDetails = ({ control, trigger }) => {
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
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={(props) => (
                        <TextField
                            label={"Full Name"}
                            variant="standard"
                            className={styles.textField}
                            fullWidth
                            onChange={(value) => props.field.onChange(value)}
                            onBlur={() => trigger("fullName")}
                            error={!!props.fieldState?.error}
                            helperText={props.fieldState?.error?.message}
                            value={props.field?.value}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={(props) => (
                        <TextField
                            label={"Email"}
                            variant="standard"
                            className={styles.textField}
                            fullWidth
                            onChange={(value) => props.field.onChange(value)}
                            onBlur={() => trigger("email")}
                            error={!!props.fieldState?.error}
                            helperText={props.fieldState?.error?.message}
                            value={props.field?.value}
                        />
                    )}
                />
                <Controller
                    name="contactNumber"
                    control={control}
                    defaultValue=""
                    render={(props) => (
                        <TextField
                            label={"Contact Number"}
                            variant="standard"
                            className={styles.textField}
                            fullWidth
                            onChange={(value) => props.field.onChange(value)}
                            onBlur={() => trigger("contactNumber")}
                            error={!!props.fieldState?.error}
                            helperText={props.fieldState?.error?.message}
                            value={props.field?.value}
                        />
                    )}
                />
                <Controller
                    name="pickUpBranch"
                    control={control}
                    defaultValue=""
                    render={(props) => (
                        <TextField
                            label={"LBC Pickup Branch Address"}
                            variant="standard"
                            className={styles.textField}
                            fullWidth
                            onChange={(value) => props.field.onChange(value)}
                            onBlur={() => trigger("pickUpBranch")}
                            error={!!props.fieldState?.error}
                            helperText={props.fieldState?.error?.message}
                            value={props.field?.value}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default CartFormDetails;

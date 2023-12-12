import { DialogContentText, TextField, InputAdornment } from "@mui/material";
import styles from "./AddSneakerForm.module.css";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

const AddSneakerForm = ({ control, trigger }) => {
    return (
        <div>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={(props) => (
                    <TextField
                        label={"Name"}
                        variant="standard"
                        className={styles.textField}
                        fullWidth
                        onChange={(value) => props.field.onChange(value)}
                        onBlur={() => trigger("name")}
                        error={!!props.fieldState?.error}
                        helperText={props.fieldState?.error?.message}
                        value={props.field?.value}
                        size="small"
                    />
                )}
            />
            <Controller
                name="brand"
                control={control}
                defaultValue=""
                render={(props) => (
                    <TextField
                        label={"Brand"}
                        variant="standard"
                        className={styles.textField}
                        fullWidth
                        onChange={(value) => props.field.onChange(value)}
                        onBlur={() => trigger("brand")}
                        error={!!props.fieldState?.error}
                        helperText={props.fieldState?.error?.message}
                        value={props.field?.value}
                        size="small"
                    />
                )}
            />
            <Controller
                name="price"
                control={control}
                render={(props) => (
                    <TextField
                        label={"Price"}
                        variant="standard"
                        className={styles.textField}
                        fullWidth
                        onChange={(value) => props.field.onChange(value)}
                        onBlur={() => trigger("price")}
                        error={!!props.fieldState?.error}
                        helperText={props.fieldState?.error?.message}
                        value={props.field?.value}
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    ₱
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            <Controller
                name="menSizes"
                control={control}
                defaultValue=""
                render={(props) => (
                    <TextField
                        label={"Men Sizes (Comma separated)"}
                        variant="standard"
                        className={styles.textField}
                        fullWidth
                        onChange={(value) => props.field.onChange(value)}
                        onBlur={() => trigger("menSizes")}
                        error={!!props.fieldState?.error}
                        helperText={props.fieldState?.error?.message}
                        value={props.field?.value}
                        size="small"
                    />
                )}
            />
            <Controller
                name="womenSizes"
                control={control}
                defaultValue=""
                render={(props) => (
                    <TextField
                        label={"Women Sizes (Comma separated)"}
                        variant="standard"
                        className={styles.textField}
                        fullWidth
                        onChange={(value) => props.field.onChange(value)}
                        onBlur={() => trigger("womenSizes")}
                        error={!!props.fieldState?.error}
                        helperText={props.fieldState?.error?.message}
                        value={props.field?.value}
                        size="small"
                    />
                )}
            />
        </div>
    );
};

export default AddSneakerForm;

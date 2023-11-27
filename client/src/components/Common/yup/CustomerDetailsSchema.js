import * as Yup from "yup";

const CustomerDetailsSchema = Yup.object().shape({
    fullName: Yup.string()
        .label("Full Name")
        .required("complete name required"),
    email: Yup.string()
        .label("Email")
        .email("invalid email pattern")
        .required("email required"),
    contactNumber: Yup.string()
        .label("Contact Number")
        .matches(/^[0-9]+$/, "numeric characters only")
        .min(9, "min characters (9)")
        .max(12, "max characters (12)")
        .required("contact number required"),
    pickUpBranch: Yup.string()
        .label("LBC Pickup Branch Address")
        .required("pickup branch required"),
});

export default CustomerDetailsSchema;

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
        .min(1, "min. characters (11)")
        .max(13, "max characters (13)")
        .required("contact number required"),
    pickUpBranch: Yup.string()
        .label("LBC Pickup Branch Address")
        .required("pickup branch required"),
});

export default CustomerDetailsSchema;

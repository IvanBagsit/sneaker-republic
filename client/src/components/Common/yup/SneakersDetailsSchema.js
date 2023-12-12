import * as Yup from "yup";

const SneakersDetailsSchema = Yup.object().shape({
    name: Yup.string().label("Name").required("Name required"),
    brand: Yup.string().label("Brand").required("Brand required"),
    price: Yup.number()
        .label("Price")
        .typeError("Price must be a valid amount")
        .positive("Price must be greater than 0")
        .required("Price required"),
    menSizes: Yup.string().label("Men Sizes").nullable(),
    womenSizes: Yup.string().label("Women Sizes").nullable(),
});

export default SneakersDetailsSchema;

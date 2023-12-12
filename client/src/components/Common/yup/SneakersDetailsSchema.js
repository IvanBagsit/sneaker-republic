import * as Yup from "yup";

const SneakersDetailsSchema = Yup.object().shape({
    name: Yup.string().label("Name").required("Name required"),
    brand: Yup.string().label("Brand").required("Brand required"),
    price: Yup.number()
        .label("Price")
        .required("Price required")
        .positive()
        .integer(),
    menSizes: Yup.array(String).label("Men Sizes"),
    womenSizes: Yup.array(String).label("Women Sizes"),
    images: Yup.array(File)
        .label("Images")
        .length(1, "Image required")
        .ensure(),
});

export default SneakersDetailsSchema;

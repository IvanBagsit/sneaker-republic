import * as Yup from "yup";

const UserInfoSchema = Yup.object().shape({
    username: Yup.string().label("Username").required("Username required"),
    password: Yup.string().label("Password").required("Password required"),
    role: Yup.string().label("Role"),
});

export default UserInfoSchema;

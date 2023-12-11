const { mongoose } = require("../index.js");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
});

usersSchema.pre("save", async function (next) {
    // Hash the password only if it has been modified or is new
    if (!this.isModified("password")) return next();

    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password along with the new salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plaintext password with the hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model("User", usersSchema, "users");

module.exports = {
    User,
};

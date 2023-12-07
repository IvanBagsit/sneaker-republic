const { mongoose } = require("../index.js");

const subOptionSchema = new mongoose.Schema({
    brand: String,
    isDropDown: Boolean,
    shoes: [String],
});

const menuOptionSchema = new mongoose.Schema({
    name: String,
    isDropDown: Boolean,
    subOptions: [subOptionSchema],
    haslink: Boolean,
    link: String,
});

const menuSchema = new mongoose.Schema({
    options: [menuOptionSchema],
});

const MenuOptions = mongoose.model("MenuOptions", menuSchema, "options");

module.exports = {
    subOptionSchema,
    menuOptionSchema,
    menuSchema,
    MenuOptions,
};

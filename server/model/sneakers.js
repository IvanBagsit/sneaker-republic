const { mongoose } = require("../index.js");

const fileImage = new mongoose.Schema({
    fileName: String,
    type: String,
    content: Buffer,
    code: String,
});

const sizes = new mongoose.Schema({
    availability: String,
    sizes: [Number],
});

const sneakers = new mongoose.Schema({
    url: String,
    mainImage: fileImage,
    shoes: [fileImage],
    title: String,
    brand: String,
    price: Number,
    sizes: [sizes],
});

const SneakersModel = mongoose.model("Sneakers", sneakers, "sneakers-details");

module.exports = {
    fileImage,
    sizes,
    sneakers,
    SneakersModel,
};

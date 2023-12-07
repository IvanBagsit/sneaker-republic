const { mongoose } = require("../index.js");

const mainImage = new mongoose.Schema({
    image: String,
    code: String,
});

const sizes = new mongoose.Schema({
    availability: String,
    sizes: [String],
});

const sneakers = new mongoose.Schema({
    url: String,
    mainImage: mainImage,
    shoes: [mainImage],
    title: String,
    brand: String,
    price: Number,
    sizes: [sizes],
});

const SneakersModel = mongoose.model("Sneakers", sneakers, "sneakers-details");

module.exports = {
    mainImage,
    sizes,
    sneakers,
    SneakersModel,
};

const createCode = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let counter = 0;
    while (counter < 6) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
        counter += 1;
    }
    return result;
};

module.exports = createCode;

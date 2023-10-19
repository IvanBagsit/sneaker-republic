export const handleIsStarted = (data) => {
    sessionStorage.setItem("isStarted", data);
};

export const handleGetIsStarted = () => {
    const savedData = sessionStorage.getItem("isStarted");
    return savedData;
};

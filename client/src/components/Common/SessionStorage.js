export const handleIsStarted = (data) => {
    sessionStorage.setItem("isStarted", data);
};

export const handleGetIsStarted = () => {
    const savedData = sessionStorage.getItem("isStarted");
    return savedData;
};

export const saveUsername = (value) => {
    sessionStorage.setItem("srUsername", value);
};

export const getUsername = () => {
    const savedUsername = sessionStorage.getItem("srUsername");
    return savedUsername;
};

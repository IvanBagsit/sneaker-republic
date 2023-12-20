export const handleIsStarted = (data) => {
    sessionStorage.setItem("isStarted", data);
};

export const handleGetIsStarted = () => {
    const savedData = sessionStorage.getItem("isStarted");
    return savedData;
};

export const saveUsername = (value) => {
    localStorage.setItem("srUsername", value);
};

export const getUsername = () => {
    const savedUsername = localStorage.getItem("srUsername");
    return savedUsername;
};

export const removeUsername = () => {
    localStorage.removeItem("srUsername");
};

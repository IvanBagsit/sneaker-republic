const DeviceChecker = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth <= 767) {
        return "phone";
    } else if (deviceWidth >= 767 && deviceWidth < 1023) {
        return "tablet";
    } else {
        return "desktop";
    }
};

export default DeviceChecker;

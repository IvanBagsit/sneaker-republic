const BufferToURI = (values, fileType) => {
    const buffer = new Uint8Array(values);
    const blob = new Blob([buffer], { type: fileType });
    const dataURI = URL.createObjectURL(blob);
    return dataURI;
};

export default BufferToURI;

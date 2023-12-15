import styles from "./AdminSneaker.module.css";
import { useState, useRef } from "react";
import Scrollbar from "../../Common/Scrollbar";
import SneakerList from "./SneakerList";
import ErrorModal from "../../Modal/ErrorModal";
import Success from "../../Modal/Success";

const AdminSneaker = ({ sneakers, hasLoaded }) => {
    const [isSuccess, setIsSuccess] = useState({
        enabled: false,
        title: "Success!",
        message: "",
    });
    const [isError, setIsError] = useState({
        enabled: false,
        title: "Something went wrong!",
        message: "Please contact administration.",
    });

    const retryRef = useRef(null);

    const handleHasLoaded = (value) => {
        hasLoaded(value);
    };

    const handleSuccess = (value) => {
        setIsSuccess(value);
    };

    const handleError = (value) => {
        setIsError(value);
    };

    return (
        <div className={styles.background}>
            <Scrollbar maxHeight={"100%"}>
                {sneakers?.map((item) => {
                    return (
                        <SneakerList
                            key={item._id}
                            id={item._id}
                            title={item.title}
                            brand={item.brand}
                            price={item.price}
                            sizes={item.sizes}
                            mainImage={item.mainImage}
                            shoes={item.shoes}
                            hasLoaded={handleHasLoaded}
                            isSuccess={handleSuccess}
                            isError={handleError}
                            retryRef={retryRef}
                        />
                    );
                })}
            </Scrollbar>
            {isSuccess.enabled && (
                <Success
                    isOpen={isSuccess.enabled}
                    title={isSuccess.title}
                    message={isSuccess.message}
                    onClose={() => {
                        setIsSuccess((prev) => {
                            return {
                                ...prev,
                                enabled: false,
                            };
                        });
                    }}
                />
            )}
            {isError.enabled && (
                <ErrorModal
                    isOpen={isError.enabled}
                    title={isError.title}
                    message={isError.message}
                    onClose={() => {
                        setIsError((prev) => {
                            return {
                                ...prev,
                                enabled: false,
                            };
                        });
                    }}
                    onRetry={() => retryRef.current()}
                />
            )}
        </div>
    );
};

export default AdminSneaker;

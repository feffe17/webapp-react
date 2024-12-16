import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoader = () => {
        // console.log("Loader attivo");
        setIsLoading(true);
    };

    const hideLoader = () => {
        // console.log("loader non attivo");
        setIsLoading(false);
    };

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);

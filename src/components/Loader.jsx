import 'ldrs/ripples';
import { useLoader } from "../LoaderContext";


const Loader = () => {
    const { isLoading } = useLoader();
    // console.log("Stato del loader:", isLoading);
    if (!isLoading) return null;
    return (
        <div style={loaderStyle}>
            <l-ripples size="80" speed="2" color="#007bff"></l-ripples>
        </div>
    );
};

const loaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
};

export default Loader;

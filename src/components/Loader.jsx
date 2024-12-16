import { useLoader } from "../contexts/LoaderContext";
import { Ripple } from "ldrs";

const Loader = () => {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

    return (
        <div className={style.loader}>
            <Ripple color="#007bff" size={80} />
        </div>
    );
};

export default Loader;

import EditContainer from "../containers/EditContainer";
import useToken from "../hooks/useToken";
import { Navigate } from "react-router-dom";

export default function Edit() {
    const token = useToken();

    if (token === null) {
        return <Navigate to="/signin" />;
    }

    return <EditContainer />;
}

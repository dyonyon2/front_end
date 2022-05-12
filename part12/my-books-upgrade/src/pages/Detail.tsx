import useToken from "../hooks/useToken";
import { Navigate, useParams } from "react-router-dom";
import DetailContinaer from "../containers/DetailContainer";
import { useLocation } from "react-router-dom";

export default function Detail() {
    const token = useToken();

    if (token === null) {
        return <Navigate to="/signin" />;
    }

    return <DetailContinaer />;
}

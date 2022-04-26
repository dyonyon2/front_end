import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SigninContainer from "../containers/SigninContainer";
import { RootState } from "../types";
import { logout } from "../redux/modules/auth";

export default function Home() {
    const dispatch = useDispatch();
    const token = useSelector<RootState, string | null>(
        (state) => state.auth.token
    );

    if (token === null) {
        return <Navigate to="/signin" />;
    }

    return (
        <div>
            <h1>Home!</h1>
            <button onClick={click}> logout </button>
        </div>
    );

    function click() {
        dispatch(logout());
    }
}

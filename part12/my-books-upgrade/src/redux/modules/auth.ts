import { createActions, handleActions } from "redux-actions";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { LoginReqType, AuthState } from "../../types";
import { Action } from "redux-actions";
import UserService from "../../servics/UserService";
import axios from "axios";
import TokenService from "../../servics/TokenService";
import { useNavigate } from "react-router-dom";
import { push } from "connected-react-router";
import history from "../../history";

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
};

const prefix = "my-books/auth";

export const { pending, success, fail } = createActions(
    "PENDING",
    "SUCCESS",
    "FAIL",
    { prefix }
);

// const navigate = useNavigate();

const reducer = handleActions<AuthState, string>(
    {
        PENDING: (state) => ({
            ...state,
            loading: true,
            error: null,
        }),
        SUCCESS: (state, action) => {
            // console.log("in success");
            // history.push("/");
            return {
                token: action.payload,
                loading: false,
                error: null,
            };
        },
        FAIL: (state, action: any) => ({
            ...state,
            loading: false,
            error: action.payload,
        }),
    },
    initialState,
    { prefix }
);

export default reducer;

// saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
    console.log("in login saga");
    try {
        yield put(pending());
        const token: string = yield call(UserService.login, action.payload);
        //localStorage
        TokenService.set(token);
        yield put(success(token));
        //push (connected-react-router install dependancy error! => )
        yield put(push("/"));
    } catch (error: any) {
        yield put(
            fail(new Error(error?.reponse?.data?.error || "UNKNOWN ERROR"))
        );
    }
}
function* logoutSaga() {
    console.log("in logout saga");
    try {
        yield put(pending());
        const token: string = yield select((state) => state.auth.token);
        yield call(UserService.logout, token);
    } catch (error: any) {
        yield put(
            fail(new Error(error?.reponse?.data?.error || "UNKNOWN ERROR"))
        );
    } finally {
        TokenService.remove();
        yield put(success(null));
    }
}
export function* authSaga() {
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}

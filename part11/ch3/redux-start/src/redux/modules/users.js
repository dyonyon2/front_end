import axios from "axios";
import { delay, put, call, takeEvery } from "redux-saga/effects";

// 액션 타입 정의
export const GET_USERS_START = "redux-start/users/GET_USERS_START";
export const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL";

// redux-promise-middleware
export const GET_USERS = "redux-start/users/GET_USERS";
export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

// 액션 생성 함수
export function getUsersStart() {
    return { type: GET_USERS_START };
}

export function getUsersSuccess(data) {
    return { type: GET_USERS_SUCCESS, data };
}

export function getUsersFail(error) {
    return { type: GET_USERS_FAIL, error };
}

// 초기값
const initialState = {
    loading: false,
    data: [],
    error: null,
};

// 리듀서
export default function users(state = initialState, action) {
    if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
        return {
            ...state,
            loading: true,
            error: null,
        };
    }
    if (action.type === GET_USERS_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            data: action.data,
        };
    }
    if (action.type === GET_USERS_FULFILLED) {
        return {
            ...state,
            loading: false,
            error: null,
            data: action.payload,
        };
    }
    if (action.type === GET_USERS_FAIL) {
        return {
            ...state,
            loading: false,
            error: action.error,
            data: [],
        };
    }
    if (action.type === GET_USERS_REJECTED) {
        return {
            ...state,
            loading: false,
            error: action.payload,
            data: [],
        };
    }

    return state;
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

//redux-thunk-middleware
export function getUsersThunk() {
    return async (dispatch, getState, { history }) => {
        try {
            console.log(history);
            dispatch(getUsersStart());
            await sleep(2000);
            const res = await axios.get("https://api.github.com/users");
            dispatch(getUsersSuccess(res.data));
            history.push("/");
        } catch (error) {
            dispatch(getUsersFail(error));
        }
    };
}

//redux-promise-middleware
export function getUsersPromise() {
    return {
        type: GET_USERS,
        payload: async () => {
            const res = await axios.get("https://api.github.com/users");
            return res.data;
        },
    };
}

//redux-saga
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

function* getUsersSaga(action) {
    try {
        yield put(getUsersStart());
        yield delay(2000);
        const res = yield call(axios.get, "https://api.github.com/users");
        yield put(getUsersSuccess(res.data));
        // yield put(push("/"));
    } catch (error) {
        yield put(getUsersFail(error));
    }
}

export function getUsersSagaStart() {
    return {
        type: GET_USERS_SAGA_START,
    };
}

export function* usersSaga() {
    yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}

import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

//Githup API 호출 시작
export const GET_USERS_START = "GET_USERS_START";
//Githup API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
//Githup API 호출에 대한 응답이 실해한 경우
export const GET_USERS_FAIL = "GET_USERS_FAIL";

export const GET_USERS = "GET_USERS";
export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "GET_USERS_REJECTED";

/*//addToDo
export function addToDo(todo) {
    return {
        type: ADD_TODO,

        // todo: todo,  -> 축약
        todo,
    };
}
*/

// { type: ADD_ToDo, text: '할일' }
export function addToDo(text) {
    return {
        type: ADD_TODO,

        // todo: todo,  -> 축약
        text,
    };
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index,
    };
}

export function showAll() {
    return {
        type: SHOW_ALL,
    };
}

export function showComplete() {
    return {
        type: SHOW_COMPLETE,
    };
}

export function getUsersStart() {
    return { type: GET_USERS_START };
}

export function getUsersSuccess(data) {
    return { type: GET_USERS_SUCCESS, data };
}

export function getUsersFail(error) {
    return { type: GET_USERS_FAIL, error };
}

export function getUsersThunk() {
    return async (dispatch) => {
        try {
            dispatch(getUsersStart());
            const res = await axios.get("https://api.github.com/users");
            dispatch(getUsersSuccess(res.data));
        } catch (error) {
            dispatch(getUsersFail(error));
        }
    };
}

export function getUsersPromise() {
    return {
        type: GET_USERS,
        payload: async () => {
            const res = await axios.get("https://api.github.com/users");
            return res.data;
        },
    };
}

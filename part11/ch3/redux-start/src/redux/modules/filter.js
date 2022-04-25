/*//액션 타입 정의
const SHOW_ALL = "redux-start/filter/SHOW_ALL";
const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

//액션 생성 함수
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

//초기값
const initialState = "ALL";

//리듀서
export default function reducer(previousState = initialState, action) {
    if (action.type === SHOW_COMPLETE) {
        return "COMPLETE";
    }

    if (action.type === SHOW_ALL) {
        return "ALL";
    }

    return previousState;
}
*/

//redux-actions 사용!
import { createAction, createActions, handleActions } from "redux-actions";

console.log(createAction("HELLO")("안녕하세요"));
export const { showAll, showComplete } = createActions(
    "SHOW_ALL",
    "SHOW_COMPLETE",
    {
        prefix: "redux-start/filter",
    }
);

//초기값
const initialState = "ALL";

const reducer = handleActions(
    {
        SHOW_ALL: (state, action) => "ALL",
        SHOW_COMPLETE: (state, action) => "COMPLETE",
    },
    initialState,
    { prefix: "redux-start/filter" }
);

export default reducer;

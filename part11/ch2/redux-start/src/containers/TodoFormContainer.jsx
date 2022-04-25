import { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addToDo } from "../redux/actions";

// const TodoFormContainer = connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addToDo(text));
//         },
//     })
// )(TodoForm);

//hook
export default function TodoFormContainer() {
    const dispatch = useDispatch();

    const add = useCallback(
        (text) => {
            dispatch(addToDo(text));
        },
        [dispatch]
    );

    return <TodoForm add={add} />;
}

import { useRef } from "react";
// import { connect } from "react-redux";
// import useReduxDispatch from "../hooks/useReduxDispatch";
// import { addToDo } from "../redux/actions";

// export default function TodoForm() {
//     const inputRef = useRef();
//     const dispatch = useReduxDispatch();

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={click}>추가</button>
//         </div>
//     );

//     function click() {
//         dispatch(addToDo(inputRef.current.value));
//     }
// }

// function TodoForm({ add }) {
//     const inputRef = useRef();

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={click}>추가</button>
//         </div>
//     );

//     function click() {
//         add(inputRef.current.value);
//     }
// }

// export default connect(
//     (state) => ({}),
//     (dispatch) => ({
//         add: (text) => {
//             dispatch(addToDo(text));
//         },
//     })
// )(TodoForm);

export default function TodoForm({ add }) {
    const inputRef = useRef();

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={click}>추가</button>
        </div>
    );

    function click() {
        add(inputRef.current.value);
    }
}

import { inject, observer } from "mobx-react";
import { useCallback } from "react";
import TodoForm from "../components/TodoForm";

const TodoFormContainer = ({ todoStore }) => {
    const add = useCallback(
        (text) => {
            todoStore.add(text);
        },
        [todoStore]
    );
    return <TodoForm />;
};

export default inject("todoStore")(observer(TodoFormContainer));

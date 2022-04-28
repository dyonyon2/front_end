export default observer(function todo({ todos }) {
    if (todos.length === 0) {
        return (
            <div>
                <h1>할 일이 없습니다.</h1>
            </div>
        );
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
});

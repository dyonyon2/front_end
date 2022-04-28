import { useRef } from "react";

export default function TodoForm({ add }) {
    const ref = useRef();

    return (
        <div>
            <p>
                <input />
                <button onClick={click}>add</button>
            </p>
        </div>
    );

    function click() {
        add(ref.current.value);
    }
}

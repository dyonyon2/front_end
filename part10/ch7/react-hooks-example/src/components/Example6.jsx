//function 컴포넌트의 라이프 사이클과 비슷한 useEffect
import React from "react";

export default function Example6() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate", count);
    });

    React.useEffect(() => {
        console.log("componentDidMount[] ", count);
    }, []);

    React.useEffect(() => {
        console.log("componentDidMount[] ", count);

        return () => {
            //cleanup
            //componentWillUnomunt
        };
    }, []);

    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate by [count]", count);
    }, [count]);

    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate by [count]", count);

        return () => {
            //cleanup
            //upate 후에 실행이 되지만, 다음 update 기준으로 그 전에 실행되기 때문에
            //다음 업데이트를 위한 처리를 할 수 있는 곳!
            console.log("cleanup by [count]", count);
        };
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}

//class 컴포넌트의 라이프 사이클
import React from "react";

export default class Example5 extends React.Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.click}>Click me</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount", this.state.count);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.state.count);
    }

    click = () => {
        this.setState({ count: this.state.count + 1 });
    };
}

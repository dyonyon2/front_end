import React from "react";

class ControlledComponent extends React.Component {
    state = {
        value: "",
    };

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.change} />
                <button onClick={this.click}>전송</button>
            </div>
        );
    }

    change = (e) => {
        console.log(e.target.value);

        this.setState({ value: e.target.value });
    };

    click = () => {
        console.log(this.state.value);
    };
}

export default ControlledComponent;

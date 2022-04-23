import React from "react";

export default function withHasMounted(Component) {
    class NewCoponent extends React.Component {
        state = {
            hasMounted: false,
        };

        render() {
            return (
                <Component {...this.props} hasMounted={this.state.hasMounted} />
            );
        }
        componentDidMount() {
            this.setState({ hasMounted: true });
        }
    }

    NewCoponent.displayName = `withHasMounted(${Component.name})`;

    return NewCoponent;
}

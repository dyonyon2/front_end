import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

console.log(cx("button", "loading"));

class Button extends React.Component {
    state = {
        loading: false,
    };

    render() {
        // console.log(classNames("foo", "bar"));
        // console.log(classNames({ foo: true }, { bar: false }));
        // console.log(
        //     classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
        // );
        // console.log(classNames(styles["button"], styles["loading"]));

        return (
            <button
                onClick={this.startLoading}
                // 기존 방식
                // className={
                //     this.state.loading
                //         ? `${styles["button"]} ${styles["loading"]}`
                //         : styles["button"]
                // }

                //classnames/bind 사용
                className={cx("button", { loading: this.state.loading })}
                {...this.props}
            />
        );
    }

    startLoading = () => {
        console.log("in startLoading!!!");
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1000);
    };
}

export default Button;

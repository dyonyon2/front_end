/*//js rounting (props 계속 전달 방법)
export default function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }

  return <button onClick={login}>로그인하기</button>;
}
*/

//js rounting (HOC withRouter 사용)
import { withRouter } from "react-router-dom";

export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  }

  return <button onClick={login}>로그인하기</button>;
});

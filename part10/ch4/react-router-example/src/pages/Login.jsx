/*//js rounting (props 계속 전달 방법)
import LoginButton from "../components/LoginButton";

export default function Login(props) {
  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <LoginButton {...props} />
    </div>
  );
}
*/

//js rounting (HOC withRouter 사용)
import LoginButton from "../components/LoginButton";

export default function Login() {
  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <LoginButton />
    </div>
  );
}

/* //Router이해하기
export default function Profile(props) {
  return <div>Profile 페이지입니다.</div>;
}
*/

// Dynamic routing
export default function Profile(props) {
  // console.log(props);

  const id = props.match.params.id;
  // console.log(id, typeof id);

  return (
    <div>
      <h2> Profile 페이지입니다.</h2>
      {id && <p>id는 {id} 입니다.</p>}
    </div>
  );
}

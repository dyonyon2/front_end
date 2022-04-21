/* //Router이해하기
export default function About(props) {
  return <div>About 페이지입니다.</div>;
}
*/

// Dynamic routing 2
// import queryString from "query-string";
import { useParams } from "react-router-dom";

export default function About(props) {
  console.log(useParams());
  console.log(useParams().name);

  // const searchParams = props.location.search;
  // console.log(searchParams);

  // URLSearchParams 방식! => 두가지 단점 존재
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));

  // const query = queryString.parse(searchParams);
  // console.log(query);

  return (
    <div>
      <h2>About 페이지입니다.</h2>
    </div>
  );
}
// {
//   query.name && <p>name 은 {query.name} 입니다. </p>;
// }

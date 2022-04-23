import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { setState, useRef } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

class Foo extends React.Component {
    componentDidMount() {
        console.log("Foo componentDidMount", this.props.children);
    }
    componentWillUnmount() {
        console.log("Foo componentWillUnMount");
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
        return {};
    }

    render() {
        console.log("Foo render", this.props.children);
        return <p>Foo</p>;
    }
}

// class Person extends React.Component {
class Person extends React.PureComponent {
    shouldComponentUpdate(previousProps) {
        for (const key in this.props) {
            if (previousProps[key] !== this.props[key]) {
                return true;
            }
        }
        return false;
    }

    render() {
        console.log("Person render");
        const { name, age } = this.props;
        return (
            <div>
                {name} / {age}
            </div>
        );
    }
}

const Person_f = React.memo(({ name, age }) => {
    console.log("Person render");
    return (
        <div>
            {name} / {age}
        </div>
    );
});

// // function App
// function App() {
//     const [state, setState] = React.useState({
//         text: "",
//         persons: [
//             { id: 1, name: "dyonyon", age: 26 },
//             { id: 2, name: "sojoong", age: 25 },
//         ],
//     });

//     const { text, persons } = state;

//     const toPersonClick = React.useCallback(() => {}, []);

//     return (
//         <div>
//             <input type="text" value={text} onChange={change} />
//             <ul>
//                 {persons.map((person) => {
//                     return (
//                         <Person
//                             {...person}
//                             key={person.id}
//                             // onClick={() => {}}
//                             onClick={toPersonClick}
//                         />
//                     );
//                 })}
//             </ul>
//             <p>{text}</p>
//         </div>
//     );

//     function change(e) {
//         setState({
//             ...state,
//             text: e.target.value,
//         });
//     }
// }

// //class App
// class App extends React.Component {
//     /*//key props 이전
//     state = {
//         count: 0,
//     };
//     */

//     state = {
//         text: "",
//         persons: [
//             { id: 1, name: "dyonyon", age: 26 },
//             { id: 2, name: "sojoong", age: 25 },
//         ],
//     };

//     /*//key props 이전
//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ count: this.state.count + 1 });
//         }, 1000);
//     }
//     */

//     /*// 다른 상위 element
//     render() {
//         if (this.state.count % 2 === 0) {
//             return (
//                 <div>
//                     <Foo />
//                 </div>
//             );
//         }
//         return (
//             <span>
//                 <Foo />
//             </span>
//         );
//     }
//     */

//     /*// 같은 상위 element
//     render() {
//         if (this.state.count % 2 === 0) {
//             return (
//                 <div
//                     className="before"
//                     title="stuff"
//                     style={{ color: "green", fontWeight: "bold" }}
//                 >
//                     <Foo />
//                 </div>
//             );
//         }
//         return (
//             <div
//                 className="after"
//                 title="stuff"
//                 style={{ color: "red", fontWeight: "bold" }}
//             >
//                 <Foo />
//             </div>
//         );
//     }
//     */

//     /*// 같은 type component
//     render() {
//         if (this.state.count % 2 === 0) {
//             return <Foo name="dyonyon" />;
//         }
//         return <Foo name="sojoong" />;
//     }
//     */

//     /*// key prop이 필요한 상황 1
//     render() {
//         if (this.state.count % 2 === 0) {
//             return (
//                 <ul>
//                     <Foo> First </Foo>
//                     <Foo> Second </Foo>
//                 </ul>
//             );
//         }
//         return (
//             <ul>
//                 <Foo> First </Foo>
//                 <Foo> Second </Foo>
//                 <Foo> Third </Foo>
//             </ul>
//         );
//     }
//     */

//     /*// key prop이 필요한 상황 2
//     render() {
//         if (this.state.count % 2 === 0) {
//             return (
//                 <ul>
//                     <Foo key="2"> Second </Foo>
//                     <Foo key="3"> Third </Foo>
//                 </ul>
//             );
//         }
//         return (
//             <ul>
//                 <Foo> First </Foo>
//                 <Foo key="2"> Second </Foo>
//                 <Foo key="3"> Third </Foo>
//             </ul>
//         );
//     }*/

//     render() {
//         const { text, persons } = this.state;

//         return (
//             <div>
//                 <input type="text" value={text} onChange={this._change} />
//                 <ul>
//                     {persons.map((person) => {
//                         return (
//                             <Person
//                                 {...person}
//                                 key={person.id}
//                                 // onClick={() => {}}
//                                 onClick={this.toPersonClick}
//                             />
//                         );
//                     })}
//                 </ul>
//                 <p>{text}</p>
//             </div>
//         );
//     }

//     _change = (e) => {
//         this.setState({
//             ...this.state,
//             text: e.target.value,
//         });
//     };

//     toPersonClick = () => {};
// }

// function App() {
//     const [visible, setVisible] = useState(false);

//     const open = () => {
//         setVisible(true);
//     };

//     const close = () => {
//         setVisible(false);
//     };

//     return (
//         <div>
//             <button onClick={open}>open</button>
//             {visible && (
//                 <Modal>
//                     <div
//                         style={{
//                             width: "100vw",
//                             height: "100vh",
//                             background: "rgba(0,0,0,0.5)",
//                         }}
//                         onClick={close}
//                     >
//                         Hello
//                     </div>
//                 </Modal>
//             )}
//         </div>
//     );
// }

function App() {
    const myInputRef = useRef();

    const click = () => {
        console.log(myInputRef.current.value);
    };
    return (
        <div>
            <MyInput ref={myInputRef} />
            <button onClick={click}> send </button>
        </div>
    );
}

export default App;

import axios from "axios";
import { useState } from "react";

export default function Regres() {
  const [state, setState] = useState([]);
  let aaa = [];
  function display() {
    state.map((ele) => {
      console.log(ele);
    });
  }
  const handler = function () {
    let promise = axios.get("https://reqres.in/api/users?page=2");
    promise.then((res) => {
      let a = res.data.data;
      setState([...a]);
    });
  };
  return (
    <>
      <button onClick={handler}> click here</button>
      <button
        onClick={() => {
          {
            display();
          }
        }}
      >
        {" "}
        diaplay all
      </button>
    </>
  );
}

// import axios from "axios";
// import { useState } from "react";

// export default function Regres() {
//   const [state, setState] = useState([]);

//   function display() {
//     console.log("display call");
//     console.log(state);
//     state.map((ele) => {
//       console.log(ele);
//     });
//   }

//   const handler = function () {
//     let promise = axios.get("https://reqres.in/api/users?page=2");
//     promise.then((res) => {
//       let a = res.data.data;
//       console.log(a);
//       setState((prevState) => [...prevState, ...a]);
//       console.log(state);
//     });
//   };

//   return (
//     <>
//       <button onClick={handler}>Click here</button>
//       <button onClick={display}>Display all</button>
//     </>
//   );
// }

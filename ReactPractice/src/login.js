import { getByDisplayValue } from "@testing-library/react";
import axios from "axios";
import { Component, useState } from "react";

// class com extends Component
export default function Login() {
  const [state, setState] = useState([]);
  function display() {
    state.map((ele) => {
      console.log(ele);
    });
  }

  function handle() {
    console.log("helllo");
    let promise = axios.get("https://reqres.in/api/users?page=2");
    promise.then((res) => {
      let a = res.data.data;
      setState([...a]);
    });
  }
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        {console.log("hiiiii")}
        <img class="card-img-top" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <button class="btn btn-primary" onClick={handle}>
            click here
          </button>
        </div>
      </div>
    </>
  );
}

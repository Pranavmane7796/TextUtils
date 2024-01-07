import { useState } from "react";

export default function Textfield() {
  const [state, setState] = useState();
  const [original, setOriginal] = useState();
  const [len, setlen] = useState();
  const [mode, setmode] = useState();
  const [b, setbl] = useState(true);

  const dark = function (e) {
    if (b == true) {
      setmode((document.body.style.backgroundColor = "black"));
      e.target.classList.add(mode);
      let textfield = document.getElementById("textfield");
      textfield.style.color = "white";
      let stringss = document.getElementById("strings");
      stringss.style.color = "white";
      let a = [1, 23, 3];
      console.log(a);
      document.getElementById("half").textContent = "Enable Light";
      setbl(false);
    }
    if (b == false) {
      console.log(b);
      console.log(mode);
      setmode((document.body.style.backgroundColor = "white"));
      e.target.classList.remove(mode);
      let textfield = document.getElementById("textfield");
      textfield.style.color = "black";
      let stringss = document.getElementById("strings");
      stringss.style.color = "black";
      document.getElementById("half").textContent = "Enable Dark";
      setbl(true);
    }
  };
  const handler = (e) => {
    var text = document.getElementById("textarea").value;
    setlen(
      `your string consist ${text.split(" ").length} words and ${
        text.split("").length
      } characters`
    );
    setOriginal(text);
    if (e.target.value === "upper") {
      let uppercase = text.toUpperCase();
      setState(uppercase);
    } else if (e.target.value === "lower") {
      let Lowercase = text.toLowerCase();
      setState(Lowercase);
    } else if (e.target.value === "reverse") {
      let reverse = text.split("").reverse().join("");
      setState(reverse);
    } else if (e.target.value === "half") {
      let half = Math.floor(text.length / 2);
      let halfString = text.slice(0, half);
      setState(halfString);
    }
  };
  return (
    <div id="body">
      <nav>
        <button
          style={{ marginLeft: "90%" }}
          id="half"
          value={"dark"}
          className="btn btn-primary my-3"
          onClick={dark}
        >
          Enable Dark
        </button>
      </nav>
      <div>
        <div>
          <h1
            id="textfield"
            className="text-center"
            style={{ marginTop: "5%" }}
          >
            Welcome to Textfield
          </h1>
        </div>
        <div className="text-center" style={{ marginTop: "5%" }}>
          <textarea
            id="textarea"
            className="text-center"
            name="postContent"
            rows={6}
            cols={60}
            placeholder="Enter text here"
          />
        </div>
        <div className="text-center my-4" onClick={handler}>
          <button id="uppercase" value={"upper"} className="btn btn-primary">
            Uppercase
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button id="lowecase" value={"lower"} className="btn btn-secondary">
            Lowercase
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button id="raeverse" value={"reverse"} className="btn btn-success">
            Reverse
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button id="half" value={"half"} className="btn btn-primary">
            Half String
          </button>
        </div>
        <div id="strings" style={{ marginLeft: "35%", marginTop: "2%" }}>
          <h6>Original String </h6>
          <p>{original}</p>
          <h6>Length of String </h6>
          <p>{len}</p>
          <h6 className="my-4">Your Result </h6>
          <p>{state}</p>
        </div>
      </div>
    </div>
  );
}

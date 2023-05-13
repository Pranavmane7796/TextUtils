import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowrer", "success");
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Start writing here"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to UPPERCASE
        </button>
        <button className="btn btn-success  mx-2" onClick={handleLoClick}>
          convert to lowerCase
        </button>
        <div />
      </div>
      <div className="container my-2">
        <h3>Text summary</h3>
        <p>
          {" "}
          {text.split(" ").length - 1} words & {text.length} characters{" "}
        </p>
        <p>{text}</p>
      </div>
    </>
  );
}

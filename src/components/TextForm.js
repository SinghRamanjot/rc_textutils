import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to upper case", "success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const [a, setA] = useState("");

  const handleCopy = () => {
    let newText1 = text;
    setA(newText1);
  };

  const handlePaste = () => {
    setText(a);
    console.log(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="contianer">
        <h1
          className={`contianer text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "blue" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlePaste}>
          Paste
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className={`contianer text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1
          className={`contianer text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Summary
        </h1>
        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
          and {text.length}
        </p>
        <h2
          className={`contianer text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {0.008 * text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length} minutes to read
        </h2>
        <h3
          className={`contianer text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Preview
        </h3>
        <p
          className={`contianer text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {text.length > 0 ? text : "Enter Some text to preview it here"}
        </p>
      </div>
    </>
  );
}

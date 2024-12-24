import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const convertUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeUpCase = (event) => {
    setText(event.target.value);
  };
  const convertLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  const handleFirstLetterUppercase = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    setText(upper);
  };
  const clear = () => {
    let wipetext = text.replace(`${text}`, "");
    setText(wipetext);
  };
  return (
    <>
      {text.split(" ").length > 51 && (
        <div className="alert alert-warning" role="alert">
          ⚠️Your text is now out of 50!
        </div>
      )}
      <div>
        <div className="form-floating">
          <textarea
            className="form-control mb-3"
            value={text}
            placeholder="Enter text here"
            onChange={changeUpCase}
          />
        </div>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={convertUpCase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          onClick={convertLowCase}
          className="btn btn-success mx-2 my-2"
        >
          Convert to LowerCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-success mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={handleFirstLetterUppercase}
        >
          Capitalize First letter
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={clear}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <div className="text-summary">
          <p>
            {text.split(" ").filter((val) => val !== "").length} words and{" "}
            {text.length} character
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
        <h3 style={{ marginTop: "20px" }}>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

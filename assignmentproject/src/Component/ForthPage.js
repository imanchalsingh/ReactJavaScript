import React from "react";

export default function ForthPage({ setCurrentPage, currentPage }) {
  const options = [
    {
      question: "5 * 1 / 2 = ?",
      title: "Arithmetic",
      text: "Introductory",
    },
    {
      question: "3x + 5 = 4",
      title: "Basic Algebra",
      text: "Foundational",
    },
    {
      question: "x= 2a(- b± (b^2 - 4ac)^1/2) ​",
      title: "Intermediate Algebra",
      text: "Intermediate",
    },
    {
      question: "0 integral L x^2 dx = ?",
      title: "Calculus",
      text: "Advanced",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <div className="forthpagetitlestyle" style={{ marginBottom: "20px" }}>
        <h1>What is your math comfort level?</h1>
        <p>
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
      </div>
      <div className="forthpagestyle" style={{ display: "flex" }}>
        {options.map((item, index) => {
          return (
            <div
            className="forthpagedivstyle"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              style={{
                border: "2px solid #f2f2f2",
                padding: "20px",
                margin: "10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "194px",
                height: "150px",
                cursor: "pointer",
              }}
            >
              <h3>{item.question}</h3>
              <i style={{fontWeight:"bold"}}>{item.title}</i>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

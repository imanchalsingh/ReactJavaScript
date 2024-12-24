import React from "react";
export default function LastPage() {
  const options = [
    {
      text: "Foundational Math Build your foundational skills in algebra, geometry, and probability.",
      logo: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-charater-business-cartoon-png-image_7256972.png",
    },
    {
      text: "Mathematical Thinking Build your foundational skills in algebra, geometry, and probability.",
      logo: "https://png.pngtree.com/png-clipart/20220131/original/pngtree-charater-business-cartoon-png-image_7256972.png",
    },
  ];
  return (
    <div
      className="lastpagedivstyle"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "70vh",
      }}
    >
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <h2>Learning paths based on your answers</h2>
        <small>Choose one to get started. You can switch anytime.</small>
      </div>
      <div
        className="lastpagedivstyle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {options.map((item, index) => {
          return (
            <div
              className="lastpagetextstyle"
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid #f2f2f2",
                borderRadius: "5px",
                padding: "10px",
                margin:"10px"
              }}
            >
              <p>{item.text}</p>
              <img
                style={{ width: "150px", height: "150px" }}
                src={item.logo}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";

export default function NextPage({ setCurrentPage, currentPage }) {
  // Data Structure ---------
  const options = [
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/010/794/618/small/financial-profit-3d-illustration-png.png",
      text: "Learning specific skills to advance my career",
    },
    {
      logo: "https://clipart-library.com/images/8TGbkGyAc.png",
      text: "Exploring new topics I'm interested in",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/512/9335/9335694.png",
      text: "Refreshing my math foundations",
    },
    {
      logo: "https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-target-clipart-vector-png-image_6862808.png",
      text: "Exercising my brain to stay sharp",
    },
    {
      logo: "https://www.pngmart.com/files/13/Expression-Cartoon-Eyes-PNG-Image.png",
      text: "Something else",
    },
  ];
  //   ------------------
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h1>Which are you most interested in?</h1>
        <p>
          Choose just one. This will help us get you started (but won't limit
          you experience.)
        </p>
      </div>
      <div>
        {options.map((item, index) => {
          return (
            <div
              className="pagedivstyle"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              style={{
                border: "2px solid #f2f2f2",
                width: "500px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <div>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={item.logo}
                  alt=""
                />
              </div>
              <div>
                <p style={{ paddingLeft: "15px" }}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

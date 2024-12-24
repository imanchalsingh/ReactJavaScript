import * as React from "react";
export default function MainPage({ setCurrentPage, currentPage }) {
  // Data structures----------
  const options = [
    {
      logo: "https://static.vecteezy.com/system/resources/previews/023/985/013/original/black-businesswoman-or-american-african-female-character-crossed-arms-pose-in-black-suit-half-body-cartoon-character-png.png",
      text: "Student or soon to be enrolled",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/009/383/461/small/man-face-clipart-design-illustration-free-png.png",
      text: "Professional pursuing a career",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/023/985/072/small/black-businessman-or-american-african-male-character-crossed-arms-pose-in-black-suit-half-body-cartoon-character-png.png",
      text: "Parent of a school-age child",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/016/766/342/small_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png",
      text: "Lifelong learner",
    },
    {
      logo: "https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png",
      text: "Teacher",
    },
    {
      logo: "https://cdn3d.iconscout.com/3d/premium/thumb/business-woman-pointing-downwards-using-both-hands-8760634-7191032.png?f=webp",
      text: "Other",
    },
  ];
  //   -------------------------
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "20px",marginTop:"20px", }}>
          <h1>Which describes you best?</h1>
          <small>This will help us personalize your experience.</small>
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
                  borderRadius: "5px",
                  marginTop:"10px",
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
    </div>
  );
}

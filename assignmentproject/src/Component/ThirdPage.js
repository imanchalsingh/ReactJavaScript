import React from "react";

export default function ThirdPage() {
  return (
    <div>
      <div className="thirdpagestyle" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
        <div>
          <img className="thirdpagestyle" style={{width:"400px",height:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawqSk0dy4w9pP49TJfNt4WAqGb2UXX047k_zYEMSLOMcZQlEmV5QOS-qoEuRg_k3Q2U&usqp=CAU" alt="" />
        </div>
        <div className="thirdpagedivstyle" style={{width:"400px", paddingLeft:"100px"}}>
          <h2>You're in the right place</h2>
          <p>
            Brilliant gets you hands- on to help improve your Professional
            skills and knowledge. You'll intract with concepts and solve fun
            problems in math, and computer science.
          </p>
        </div>
      </div>
    </div>
  );
}

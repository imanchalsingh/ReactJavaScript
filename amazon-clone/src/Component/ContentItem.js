
import React from "react";

export default function ContentItem(props) {
  function showAlert() {
    props.setAddToCardData([...props.addToCardData, props.metaData]);
    
  }
  return (
    <>
      <div>
        <div className="container my-3">
          <div className="card">
            {props.price <= 100 * 83 && (
              <span className="badge text-bg-danger">Sale</span>
            )}
            <img
            style={{border:"10px solid #fff"}}
              src={props.imageUrl}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text">{props.description}</p>
              <div style={{ display: "flex" }}>
                <s>
                  {props.oldprice}
                  <s
                    style={{ fontSize: "15px" }}
                    className="material-symbols-outlined"
                  >
                    currency_rupee
                  </s>
                </s>
                <h5 className="price" style={{color:"#0457cc"}}>
                  {props.price}
                  <span className="material-symbols-outlined">
                    currency_rupee
                  </span>
                </h5>
              </div>
              <h6>
                <span
                  style={{ fontSize: "15px", textAlign: "center" }}
                  className="material-symbols-outlined"
                >
                  grade
                </span>
                {props.rate}({props.count})
              </h6>
              <button className="btn btn-warning" style={{width:"100%"}} onClick={showAlert}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";

const Cart = (props) => {
  useEffect(() => {
    console.log(props.addToCardData);
  }, []);
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <button
        className=" btn-danger"
        style={{
          borderRadius: "50px",
          backgroundColor: "red",
          width: "100px",
          height: "40px",
          border: "none",
        }}
        onClick={() => {
          props.setopenAddToCart(false);
        }}
      >
        Back
      </button>
      <div className=" mb-2">
        <div className="row g-0">
          {props.addToCardData.map((data, index) => {
            return (
              <>
                <div className="col-md-8" key={index}>
                  <div className="card-body">
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <img
                        style={{ height: "100px", width: "20%" }}
                        src={data.image}
                        alt=""
                      />
                      <div style={{ marginLeft: "30px" }}>
                        <h5 className="card-title">{data.title}</h5>
                        <p>{data.category}</p>
                        <p className="card-text">
                          {Math.floor(data.price * 83)}
                          <span
                            style={{ fontSize: "20px" }}
                            className="material-symbols-outlined"
                          >
                            currency_rupee
                          </span>
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Added {Math.floor(Math.random() * 60)} sec ago
                          </small>
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <button
                            className="btn"
                            style={{
                              width: "150px",
                              backgroundColor: "#f0c000",
                              marginLeft: "50px",
                            }}
                          >
                            Buy Now
                          </button>
                          <button
                            className="btn"
                            style={{
                              width: "150px",
                              border: " 2px solid #f0c000",
                              color: "#f0c000",
                              marginLeft: "50px",
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

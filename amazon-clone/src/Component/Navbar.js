import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Container from "@mui/material/Container";
import logo from "./logopicture.png";
function Navbar(props) {
  const [openMessage, setOpenMessage] = useState(false);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const open = () => {
    setOpenMessage(true);
  };
  const close = () => {
    setOpenMessage(false);
  };

  useEffect(() => {
    if (props.addToCardData) {
      let finalTotalAmount = 0;
      props.addToCardData.forEach((data) => {
        finalTotalAmount = finalTotalAmount + data.price * 83;
      });

      setTotalAmount(finalTotalAmount);
      setTotalItemsInCart(props.addToCardData.length);
    }
  }, []);
  return (
    <div>
      <div className="nav">
        <img style={{ width: "17%", height: "38px",marginTop:"5px" }} src={logo} alt="logo" />
        <button
          style={{
            width: "10%",
            marginLeft: "-85px",
            height: "35px",
            backgroundColor: "#f0c000",
          }}
          className="btn cart-btn"
          onClick={() => {
            props.setopenAddToCart(true);
          }}
        >
          Carts
        </button>
        <button
          style={{
            borderRadius: "50px",
            width: "10%",
            height: "35px",
            marginTop: "8px",
            marginLeft: "-70%",
            border: "none",
            backgroundColor: "green",
          }}
          className=" btn-dark"
          onClick={open}
        >
          Total Amount
        </button>
      </div>
      <div>
        {openMessage && (
          <Dialog onClose={close} open={open}>
            <Container maxWidth="sm">
              <h1
                className="title-name"
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                AmazoneStore
              </h1>
              <hr></hr>
              <h5 style={{ marginTop: "30px" }}>
                🌟You add {totalItemsInCart} product in Add to cart.
              </h5>
              <h5>🌟Your Total Amount is {totalAmount}.</h5>
              <button
                className="btn btn-dark"
                onClick={close}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Close
              </button>
            </Container>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Navbar;

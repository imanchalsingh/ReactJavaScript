import { productData } from "../fakeProductDataJsObject";
import ContentItem from "./ContentItem";
import React, { useState } from "react";

const Content = (props) => {
  const [product, setProduct] = useState(productData);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="content">
      <div className="container my-2">
        <div style={{ display: "flex" }}>
          <input
            className="searchbar"
            type="text"
            name="search"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setProduct(productData);
              } else {
                const finalProduct = product.filter((element) =>
                  element.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setProduct(finalProduct);
              }
            }}
          />
        </div>
        <div className="row">
          {product.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <ContentItem
                  title={element.title.slice(0, 15) + "...."}
                  imageUrl={element.image}
                  description={element.description.slice(0, 80) + "......"}
                  oldprice={Math.floor(Math.random() * 100000)}
                  price={Math.ceil(element.price * 83)}
                  rate={element.rating.rate}
                  count={element.rating.count}
                  setAddToCardData={props.setAddToCardData}
                  metaData={element}
                  addToCardData={props.addToCardData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;

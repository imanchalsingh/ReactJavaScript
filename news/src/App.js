import "./App.css";
import React, { Component } from "react";
import NewsItem from "./Component/NewsItem";

export default class App extends Component {
  render() {
    return (
      <div>
        <NewsItem />
      </div>
    );
  }
}

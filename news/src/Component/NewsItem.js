import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { articles } from "../newsapi";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from "./projectlogo.png";
export default function NewsItem() {
  const maxLimit = 20;
  const [data, setData] = useState(articles);
  const [searchText, setSearchText] = useState("");
  const [initialDataLength, setInitialDataLength] = useState(maxLimit);
  //   useEffect(() => {
  //     console.log(data);
  //     fetch(
  //       "https://newsapi.org/v2/everything?q=tesla&from=2023-09-26&sortBy=publishedAt&apiKey=7edeeca44fba4a0cbbfcc05bd1e73f0a"
  //     ).then((response) => {
  //       response.json().then((response) => {
  //         console.log(response);
  //         if (response && response.articles) {
  //           setData(response.articles);
  //         }
  //       });
  //     });
  //   }, []);
  return (
    <div>
      <nav
        style={{
          width: "100%",
          backgroundColor: "#007a9c",
          height: "60px",
          display: "flex",
        }}
      >
        <img src={logo} alt="Logo" />
        <input
          className="searchbar"
          style={{
            width: "40%",
            backgroundColor: "#ffffff81",
            height: "32px",
            border: "none",
            marginLeft: "42%",
            borderRadius: "2px",
            marginTop: "13px",
          }}
          autoComplete="off"
          type="text"
          name="search"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              setData(articles);
            } else {
              const finalAriticles = data.filter(
                (element) =>
                  element.title &&
                  element.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setData(finalAriticles);
            }
          }}
        />
      </nav>

      <InfiniteScroll
        dataLength={initialDataLength}
        hasMore={true}
        loader={<></>}
        next={() => {
          setTimeout(() => {
            setInitialDataLength(initialDataLength + maxLimit);
          }, 2000);
        }}
      >
        <Grid container>
          {data.slice(0, initialDataLength).map((item, index) => {
            return (
              <Grid item xl={3} md={3} lg={3} style={{ marginTop: "30px" }}>
                <Card key={index} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://images.unsplash.com/photo-1618794810603-4b384ce62737?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title
                        ? item.title.slice(0, 20) + "...."
                        : "Unknown news of World!"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description
                        ? item.description.slice(0, 50) + "......"
                        : "Unknown news of world but if you are intrested, you can check!"}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      --{item.author ? item.author.slice(0, 25) : "Unknown"}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {item.publishedAt ? item.publishedAt : "Unknown"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function FifthPage() {
  return (
    <div>
      <div
        className="fifthpagestyle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="fifthpageimagestyle">
          <img
            style={{ width: "400px", height: "350px" }}
            src="https://assets-modified.embeddables.com/E9OjYp3VBqYRkTzIL45A%2FBlob%20parent%20and%20kid_32598737700843317.png"
            alt=""
          />
        </div>
        <div
          className="fifthpagetitlestyle"
          style={{ width: "400px", paddingLeft: "100px" }}
        >
          <h2>You're on you way!</h2>
          <Stack spacing={1}>
            <Rating
              className="ratingstarstyle"
              name="size-large"
              defaultValue={2}
              size="large"
            />
          </Stack>
          <p>
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previosly struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </p>
        </div>
      </div>
    </div>
  );
}

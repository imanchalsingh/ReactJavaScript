import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingPage() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexDirection:"column",height:"70vh"}}>
      <div>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
      <div className="loadingpagestyle" style={{width:"400px"}}>
        <h3>
            Finding learning path recommendations for you based on your responses
        </h3>
      </div>
    </div>
  );
}

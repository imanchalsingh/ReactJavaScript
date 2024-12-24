import "./App.css";
import * as React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MainPage from "./Component/MainPage";
import NextPage from "./Component/NextPage";
import ThirdPage from "./Component/ThirdPage";
import ForthPage from "./Component/ForthPage";
import FifthPage from "./Component/FifthPage";
import LoadingPage from "./Component/LoadingPage";
import LastPage from "./Component/LastPage";
import { Typography } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showLoader, setShowLoader] = React.useState(false);

  const pagesToRender = {
    1: <MainPage setCurrentPage={setCurrentPage} currentPage={currentPage} />,
    2: <NextPage setCurrentPage={setCurrentPage} currentPage={currentPage} />,
    3: <ThirdPage setCurrentPage={setCurrentPage} />,
    4: <ForthPage setCurrentPage={setCurrentPage} currentPage={currentPage} />,
    5: <FifthPage setCurrentPage={setCurrentPage} />,
    6: <LastPage setCurrentPage={setCurrentPage} />,
  };

  const handleBack = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  React.useEffect(() => {
    console.log("CurrentPage: ", currentPage);
  }, [currentPage]);
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Typography>
          <ArrowLeftIcon
            sx={{
              cursor:"pointer",
              display: currentPage === 1 || currentPage === 6 ? "none" : "flex",
            }}
            onClick={() => {
              handleBack();
            }}
          />
        </Typography>

        <div
          style={{
            width: "60%",
            display: currentPage === 6 ? "none" : "flex",
            alignItems: "center",
            backgroundColor: "grey",
            height: "7px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: `${currentPage * 20}%`,
              backgroundColor: "#0086b3",
              height: "7px",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </div>
      {!showLoader && pagesToRender[currentPage]}
      {showLoader && <LoadingPage />}
      <div
        style={{
          display: currentPage === 6 || showLoader ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "#999999",
            color: "white",
            width: "90px",
            height: "30px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage === 5) {
              setShowLoader(true);
              setTimeout(() => {
                setShowLoader(false);
                setCurrentPage(currentPage + 1);
              }, 3000);
            } else {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;

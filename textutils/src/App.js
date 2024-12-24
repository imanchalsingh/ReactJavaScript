import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Enter text to analyze below</h1>
        <TextForm />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;

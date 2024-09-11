import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";

const App = () => {
  return (
    <div>
    <Container>
      <div className="px-4 text-center">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Controls></Controls>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default App;

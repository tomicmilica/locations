import React from "react";
import { Routes, Route } from "react-router-dom";
import Locations from "./pages/locations";
import { locations } from "./routes/routes";
import { Container } from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Locations />
      </Container>
    </>
  );
}

export default App;

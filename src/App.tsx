import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Locations from "./pages/locations";
import { locations } from "./routes/routes";
import { Container } from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path={locations()} element={<Locations />} />
          <Route path="*" element={<Navigate to={locations()} replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Locations from "./pages/locations";
import { locations } from "./routes/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={locations()} element={<Locations />} />
      </Routes>
    </>
  );
}

export default App;

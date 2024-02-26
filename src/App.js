import React, { useState } from "react";
import Map from "./components/map/Map";

import "./App.css";

function App() {
  const [viewState, setViewState] = useState({
    longitude: -0.1275,
    latitude: 51.5072,
    zoom: 9,
    pitch: 50,
    bearing: 0,
    // transitionInterpolator: new FlyToInterpolator(),
    transitionDuration: 1100,
  });
  return (
    <>
      <Map location={viewState} />
    </>
  );
}

export default App;

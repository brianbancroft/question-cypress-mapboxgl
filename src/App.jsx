import { useState } from "react";
import "./App.css";

import Map from "./Map";

function App() {
  const [mapPan, setMapPan] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);

  function incrementPanCount() {
    setMapPan(true);
  }

  function incrementMouseMoveCount() {
    setMouseMove(true);
  }

  return (
    <main>
      <header>
        <h1>simple map</h1>
        <p>
          did map pan? <span id="panCheck">{mapPan ? "yes" : "no"}</span>
        </p>
        <p>
          did map detect mouse move?
          <span id="mouseMoveCheck">{mouseMove ? "yes" : "no"}</span>
        </p>
      </header>
      <div className="App">
        <Map
          incrementPanCount={incrementPanCount}
          incrementMouseMoveCount={incrementMouseMoveCount}
        />
      </div>
    </main>
  );
}

export default App;

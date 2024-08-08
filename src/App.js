
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });

  return (
    <div>
      <DeckGL
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            if(!url.includes('?')){
              url = url + '?api_key={your_api_key}';
            }
            else{
              url = url + '&api_key={your_api_key}';

            }
            return { url, resourceType };
          }}
        />
      </DeckGL>
    </div>
  );
    };

    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);

    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

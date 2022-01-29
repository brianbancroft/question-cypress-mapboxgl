import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_GL_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      map.on("click", (e) => {
        const { lngLat } = e;

        new mapboxgl.Popup()
          .setLngLat(lngLat)
          .setHTML(`<p>hello click event</p>`)
          .addTo(map);
      });

      map.on("dblclick", (e) => {
        const { lngLat } = e;

        new mapboxgl.Popup()
          .setLngLat(lngLat)
          .setHTML(`<p>hello double click event</p>`)
          .addTo(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "80vw",
  height: "80vh"
};

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2NhcmNydXgiLCJhIjoiY2pyOW5jeHRqMGpsNzQ0cGQzNXdwbmI2ZiJ9.ig8MDQnhZtsaykzp9el9iA";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/scarcrux/ckkt289a41qyj17pkvjxc9eck", // stylesheet location
        center: [-73.972951, 40.653124],
        zoom: 11.44
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div id="container-map" ref={el => (mapContainer.current = el)} style={styles}/>;
};

export default Map;

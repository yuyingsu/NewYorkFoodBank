import React, { useEffect, useRef, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { render } from "@testing-library/react";

const Map = () => {
       const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1Ijoic2NhcmNydXgiLCJhIjoiY2pyOW5jeHRqMGpsNzQ0cGQzNXdwbmI2ZiJ9.ig8MDQnhZtsaykzp9el9iA'
      });

      return (
      <Map
        style="mapbox://styles/scarcrux/ckkt289a41qyj17pkvjxc9eck"
        center={[-73.972951, 40.653124]}
        zoom={[11.44]}
        containerStyle={{
          height: '80vh',
          width: '80vw'
        }}
      >


      </Map>
      );
};

export default Map;

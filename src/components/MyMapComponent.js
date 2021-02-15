import _ from "lodash";
import React, { useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { pantryListReducer } from "reducers/pantryReducers";
import { listPantries } from "actions/pantryAction";
import { useSelector, useDispatch } from 'react-redux';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBReJVSyI6er0EIqUfX4xLI0aZWsxo07sE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap zoom={8} center={{ lat: 40.653124, lng: -73.972951 }}>
    {props.pantries.map((pantry)=>((
      <Marker position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}/>
    )))
    }
  </GoogleMap>
));

const enhance = _.identity;

function ReactGoogleMaps(){
  const lists = useSelector(state => state.pantryList);
  const { pantries } = lists;
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(listPantries()); 
    return function cleanup() {
    };
  }, []);

  return <MyMapComponent pantries={pantries}/>;

}

export default enhance(ReactGoogleMaps);
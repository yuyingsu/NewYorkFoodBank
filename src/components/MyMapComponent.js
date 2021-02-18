import _ from "lodash";
import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { pantryListReducer } from "reducers/pantryReducers";
import { listPantries } from "actions/pantryActions";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { formatPhoneNumber } from 'react-phone-number-input';

const { compose, withProps, withStateHandlers } = require("recompose");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBReJVSyI6er0EIqUfX4xLI0aZWsxo07sE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80vh`, width: `80vw` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (

  <GoogleMap zoom={11} center={{ lat: 40.653124, lng: -73.972951 }}>
    {props.pantries && props.pantries.map((pantry, idx)=>((
      <Marker onClick={()=>{console.log(idx);props.onToggleOpen(idx)}} position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}>
       {props.array[idx] && <InfoBox
        position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
        <div style={{ backgroundColor: `black`, opacity: 0.6, padding: `12px` }}>
          <div style={{ fontSize: `16px`, color: `white` }}>
            {pantry.pantry_name}<br></br>
            {pantry.type}<br></br>
            {pantry.address}<br></br>
            {pantry.contact}<br></br>
            {formatPhoneNumber(pantry.phone)}<br></br>
            {pantry.hours}
          </div>
        </div>
      </InfoBox>
      }
      </Marker>
      )))
    }
  </GoogleMap>
));

const enhance = _.identity;

function ReactGoogleMaps(){
  const lists = useSelector(state => state.pantryList);
  const [array, setArray] = useState([]);
  const { loading, pantries } = lists;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(listPantries());
    if(!loading){
    const initArray = new Array(pantries.length);
    for(let i=0;i<initArray.length;i++){
      initArray[i]=false;
    }
    setArray(initArray);
    }
    return function cleanup() {
    };
  }, []);

  const onToggleOpen = (idx) => {
    const newArray = [...array];
    newArray[idx]=!newArray[idx];
    setArray(newArray);
  }

  return <MyMapComponent pantries={pantries} array={array} onToggleOpen={onToggleOpen}/>;

}

export default enhance(ReactGoogleMaps);

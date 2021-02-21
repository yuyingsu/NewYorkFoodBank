import _ from "lodash";
import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

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
      <Marker key={idx} onClick={()=>{console.log(idx);props.onToggleOpen(idx)}} position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}>
       {props.array[idx] && <InfoBox key={idx}
        position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
        <div style={{ backgroundColor: `black`, opacity: 0.6, padding: `12px` }}>
          <div style={{ fontSize: `16px`, color: `white` }}>
            {"Name: " + pantry.pantry_name}<br></br>
            {"Type: " + pantry.type}<br></br>
            {"Address: " + pantry.address}<br></br>
            {"Contact: " + pantry.contact}<br></br>
            {"Phone: " + formatPhoneNumber(pantry.phone)}<br></br>
            <br></br>{"Hours"}<br></br>
            {"Sunday: " + props.hours[idx][0]}<br></br>
            {"Monday: " + props.hours[idx][1]}<br></br>
            {"Tuesday: " + props.hours[idx][2]}<br></br>
            {"Wednesday: " + props.hours[idx][3]}<br></br>
            {"Thursday: " + props.hours[idx][4]}<br></br>
            {"Friday: " + props.hours[idx][5]}<br></br>
            {"Saturday: " + props.hours[idx][6]}<br></br>
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

function ReactGoogleMaps(props){
  const [array, setArray] = useState([]);
  const [currIdx, setCurrentIdx] = useState(-1);

  const pantryHours = [];
  props.pantries.forEach(pantry => {
    const hrs = JSON.parse(pantry.hours).schedule;
    const schedule = ['Closed', 'Closed', 'Closed', 'Closed', 'Closed', 'Closed', 'Closed']
    const hours = hrs.map((hr)=> {
    const dayOfWeek = new Date(hr[0]).getDay()
      if (schedule[dayOfWeek] === 'Closed') {
      schedule[dayOfWeek] = new Date(hr[0]).toLocaleString('en-US', { hour: 'numeric', hour12: true }) + "-" + new Date(hr[1]).toLocaleString('en-US', { hour: 'numeric', hour12: true })
      } else {
        schedule[dayOfWeek] += ", " + new Date(hr[0]).toLocaleString('en-US', { hour: 'numeric', hour12: true }) + "-" + new Date(hr[1]).toLocaleString('en-US', { hour: 'numeric', hour12: true })
      }
    })
    pantryHours.push(schedule);
  })

  React.useEffect(() => {
    const initArray = new Array(props.pantries.length);
    for (let i=0;i<initArray.length;i++){
      initArray[i]=false;
    setArray(initArray);
    }
    return function cleanup() {
    };
  }, []);

  const onToggleOpen = (idx) => {
    console.log(currIdx+" "+idx);
    const newArray = [...array];
    if(currIdx!=-1 && currIdx!=idx){
      newArray[currIdx]=!newArray[currIdx];
      setArray(newArray);
    }
    newArray[idx]=!newArray[idx];
    setArray(newArray);
    setCurrentIdx(idx);
  }

  return <MyMapComponent hours={pantryHours} pantries={props.pantries} array={array} onToggleOpen={onToggleOpen}/>;

}

export default enhance(ReactGoogleMaps);

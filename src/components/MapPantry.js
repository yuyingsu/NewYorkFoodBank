import _ from "lodash";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { listPantries } from "actions/pantryActions";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { formatPhoneNumber } from 'react-phone-number-input';

const { compose, withProps } = require("recompose");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const MapPantry = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBReJVSyI6er0EIqUfX4xLI0aZWsxo07sE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div id="container-map" style={{ height: `80vh`, width: `75vw` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return(
    <div><GoogleMap zoom={13} center={{ lat: parseFloat(props.pantries[0].geocode.split(",")[0]), lng: parseFloat(props.pantries[0].geocode.split(",")[1]) }}>

    {props.pantries && props.pantries.map((pantry, idx)=>((
      <Marker key={idx} onClick={()=>{props.onToggleOpen(idx)}} position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}>
       {props.array[idx] && props.boxes[idx]}
      </Marker>
      )))
    }
  </GoogleMap>
  </div>
  )
  }
);

const enhance = _.identity;

function ReactGoogleMaps(props) {
  const lists = useSelector(state => state.pantryList);
  const { loading, pantries } = lists;
  const [array, setArray] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [currIdx, setCurrentIdx] = useState(-1);
  const dispatch = useDispatch();
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

useEffect(() => {
    const initArray = new Array(props.pantries.length);
    for (let i=0;i<initArray.length;i++){
     initArray[i]=false;
    setArray(initArray);
    let box = [];
    props.pantries.map((pantry, idx)=>(box.push(<InfoBox key={idx}
        position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
        <div style={{ backgroundColor: `black`, opacity: 0.6, padding: `12px` }}>
          <div style={{ fontSize: `16px`, color: `white` }}>
            {"Name: " + pantry.pantry_name}<br></br>
            {"Type: " + pantry.type}<br></br>
            {"Address: " }<a href={`https://www.google.com/maps/search/?api=1&query=${pantry.address}`}>{pantry.address}</a><br></br><br></br>
            {"Contact: " + pantry.contact_name}<br></br>
            {"Phone: " + formatPhoneNumber(pantry.phone)}<br></br>
            <br></br>{"Hours"}<br></br>
            {"Sunday: " + pantryHours[idx][0]}<br></br>
            {"Monday: " + pantryHours[idx][1]}<br></br>
            {"Tuesday: " + pantryHours[idx][2]}<br></br>
            {"Wednesday: " + pantryHours[idx][3]}<br></br>
            {"Thursday: " + pantryHours[idx][4]}<br></br>
            {"Friday: " + pantryHours[idx][5]}<br></br>
            {"Saturday: " + pantryHours[idx][6]}<br></br>
          </div>
        </div>
      </InfoBox>)));
    setBoxes(box);

    }
    return function cleanup() {
    };
  }, []);

  const onToggleOpen = (idx) => {
    let newArray = [...array];
    if(currIdx!=-1 && currIdx!=idx && newArray[currIdx]){
      newArray[currIdx]=!newArray[currIdx];
      setArray(newArray);
      console.log(currIdx+" "+idx);
    }
    newArray[idx]=!newArray[idx];
    setArray(newArray);
    setCurrentIdx(idx);
  }

  return <MapPantry hours={pantryHours} pantries={props.pantries} array={array} onToggleOpen={onToggleOpen} boxes={boxes}/>;

}

export default enhance(ReactGoogleMaps);

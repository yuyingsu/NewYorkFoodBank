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
import { formatPhoneNumber } from 'react-phone-number-input';

const { compose, withProps } = require("recompose");
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
)(props => {
  return(
  <GoogleMap zoom={11} center={{ lat: 40.653124, lng: -73.972951 }}>
    {props.pantries && props.pantries.map((pantry, idx)=>((
      <Marker key={idx} onClick={()=>{props.onToggleOpen(idx)}} position={{lat: parseFloat(pantry.geocode.split(",")[0]), lng: parseFloat(pantry.geocode.split(",")[1])}}>
       {props.array[idx] && props.boxes[idx]}
      </Marker>
      )))
    }
  </GoogleMap>
  )
  }
);

const enhance = _.identity;

function ReactGoogleMaps(){
  const lists = useSelector(state => state.pantryList);
  const { loading, pantries } = lists;
  const [array, setArray] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [currIdx, setCurrentIdx] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPantries());
    if(!loading){
    const initArray = new Array(pantries.length);
    for(let i=0;i<initArray.length;i++){
      initArray[i]=false;
    }
    setArray(initArray);
    let box = [];
    pantries.map((pantry, idx)=>(box.push(<InfoBox key={idx}
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

  return <MyMapComponent pantries={pantries} array={array} onToggleOpen={onToggleOpen} boxes={boxes}/>;

}

export default enhance(ReactGoogleMaps);

import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { classnames } from './ReactPlacesEventHandler';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Label
} from "reactstrap";
class ReactPlacesSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      errorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
      gmapsLoaded: false
    };
  }

  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    })
  }

  componentDidMount () {
    window.initMap = this.initMap
    const gmapScriptEl = document.createElement(`script`)
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBReJVSyI6er0EIqUfX4xLI0aZWsxo07sE&libraries=places&callback=initMap`
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.props.address(selected);
        this.props.geocode(lat.toString() + ", " + lng.toString())
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const {
      address,
      errorMessage,
      latitude,
      longitude,
      isGeocoding,
    } = this.state;

    return (
      <div>
        {this.state.gmapsLoaded && <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 0}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                       value={this.props.value}
                    {...getInputProps({
                      placeholder: 'Address',
                      className: 'Demo__search-input',
                    })}
                  />
                    </InputGroup>
                </div>
                {suggestions.length > 0 && (
                  <div style={{color:"black"}} className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { color: "black", backgroundColor: '#98c2f2', cursor: 'pointer' }
                  : { color: "white", backgroundColor: 'rgba(0,0,0,0.5)', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                    <div className="Demo__dropdown-footer">
                      <div>
                 {/*} <img
                          src={require('../images/powered_by_google_default.png')}
                          className="Demo__dropdown-footer-image"
                  />*/}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>}
        {errorMessage.length > 0 && (
          <div className="Demo__error-message">{this.state.errorMessage}</div>
        )}

      </div>
    );
  }
}

export default ReactPlacesSearchBar;

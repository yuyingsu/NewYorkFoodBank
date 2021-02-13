import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class AddressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', ready: false }
  }
  
  componentDidMount() {
    this.loadGoogleMaps(() => {
    this.setState({ ready: true });
  });
}

componentWillUnmount() {
  this.unloadGoogleMaps();
}

loadGoogleMaps = callback => {
    const existingScript = document.getElementById("googlePlacesScript");
    if (!existingScript) {
        const script = document.createElement("script");
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBReJVSyI6er0EIqUfX4xLI0aZWsxo07sE&libraries=places";
        script.id = "googleMaps";
        document.body.appendChild(script);
        //action to do after a script is loaded in our case setState
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
};

unloadGoogleMaps = () => {
    let googlePlacesScript = document.getElementById("googlePlacesScript");
    if (googlePlacesScript) {
        googlePlacesScript.remove();
    }
};
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
     <div>
      {this.state.ready && <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#bf544e', cursor: 'pointer' }
                  : { backgroundColor: '#8B4513', cursor: 'pointer' };
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
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      }
    </div>
    );
  }
}

export default AddressBar;

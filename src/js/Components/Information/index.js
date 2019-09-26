import { connect } from 'react-redux';
import CityInfo from './info';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    lat: store.search.lat,
    lon: store.search.lon,
    icon: store.search.icon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    wind: store.search.wind,
  };
}

export default connect(mapStoreToProps)(CityInfo);

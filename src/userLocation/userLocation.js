import api from "./api";

const getLocation = (location) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=e8e5abf689124504af5105254232102%20&q=${location}&aqi=no`;
  return api.get(URL);
};

const userLocation = {
  getLocation,
};

export default userLocation;

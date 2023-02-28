import userLocation from "./userLocation";

const toData = (locationData) => {
    return {
        name: locationData.location.name,
        temp: locationData.current.temp_c.toFixed(),
        condition: locationData.current.condition.text,
        feels: locationData.current.feelslike_c.toFixed(),
        humidity: locationData.current.humidity,
        wind: locationData.current.wind_kph.toFixed(),
    };
};

const getLocationData = (location) => userLocation.getLocation(location).then(data => toData(data))



const locationData = {
    getLocationData
}

export default locationData
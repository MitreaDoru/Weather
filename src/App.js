import React, { useState } from "react";
import "./index.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import locationData from "./userLocation/locationData";
const App = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState('');
  const searchForLocation = (e) => {
    if (e.key === "Enter") {
      locationData.getLocationData(location).then(data => setData(data))
      setLocation("");
    }
  };

  return (
    <div className="app">
      <Input
        value={location}
        onKeyUp={searchForLocation}
        onChange={(e) => setLocation(e.target.value)}
      />
      {data && (
        <Container
          name={data.name}
          temp={data.temp}
          condition={data.condition}
          feels={data.feels}
          humidity={data.humidity}
          wind={data.wind}
        />
      )}
    </div>
  );
};

export default App;

import styled from "./Container.module.css";

const Container = ({ name, temp, condition, feels, humidity, wind }) => {
  return (
    <div className={styled.container}>
      <div className={styled.first}>
        <div className="location">
          <p>{name}</p>
        </div>
        <div>
          <h3>{temp}℃</h3>
        </div>
        <div className={styled.description}>
          <p>{condition}</p>
        </div>
      </div>
      <div className={styled.second}>
        <div >
          <p>{feels}℃</p>
          <p>Feels like</p>
        </div>
        <div >
          <p>{humidity}%</p>
          <p>Humidity</p>
        </div>
        <div>
          <p>{wind}Km/h</p>
          <p>Wind speed</p>
        </div>
      </div>
    </div>
  );
};

export default Container;

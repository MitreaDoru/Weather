import styled from "./Input.module.css";

const Input = ({ value, onChange, onKeyUp }) => {
  return (
    <div className={styled.searchBar}>
      <input
        type='text'
        value={value}
        placeholder="Enter Location"
        onKeyUp={onKeyUp}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;

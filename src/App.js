import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Heu",
      age: 5
    },
    {
      name: "NoName"
    }
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, {props.name} and {props.age} だよ
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default App;

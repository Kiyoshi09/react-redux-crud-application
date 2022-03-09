import React from "react";

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

User.defaultProps = {
  age: 1
};

export default App;

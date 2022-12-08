import React, { useState } from "react";

// SetInterval func. JS
// ------------------------
// function sayHello() {
//   const hello = "Hello";
//   console.log(hello);
// }

// sayHello();
// setInterval(sayHello, 1000);

function App() {
  // const currentTime = new Date().toLocaleTimeString();

  // Unlike variable pressing button won't change anything so function is better
  function currentTime() {
    return new Date().toLocaleTimeString();
  }

  const [time, setTime] = useState(currentTime);

  function updateTime() {
    setTime(currentTime);
    // console.log(currentTime);
  }

  setInterval(updateTime, 1000); // Press instead of me update time button each 1 second

  return (
    <div className="container">
      <h3>{time}</h3>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

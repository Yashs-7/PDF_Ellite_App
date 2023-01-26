import  { useState } from "react";

function Time() {
  var time = new Date().toLocaleTimeString();
  const [count, setTime] = useState(time);

  function getTime() {
    var newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  setInterval(getTime, 1);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
export default Time;

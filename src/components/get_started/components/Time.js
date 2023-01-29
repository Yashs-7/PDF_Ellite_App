import react, { useState,useEffect } from "react";

function Time() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <li>{time}</li>
    </>
  );
}
export default Time;

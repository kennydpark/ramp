import { useState } from "react";
import "./styles.css";

export default function App({ input }) {
  const [time, setTime] = useState("");

  const update = () => {
    setInterval(() => {
      date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  };

  let date = new Date();
  let today =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  update();

  if (!input) {
    return (
      <div className="App">
        <h1>{today}</h1>
        <h1>{time}</h1>
      </div>
    );
  } else if (Array.isArray(input)) {
    return (
      <div>
        {input.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>
    );
  } else {
    if (typeof input === "object") {
      input = "The input value is an object";
    }
    return <div>{input}</div>;
  }
}

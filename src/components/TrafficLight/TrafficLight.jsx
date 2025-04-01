import { Light } from "../Light/Light";
import { useState, useEffect } from "react";
import style from "./style.module.css";

const TRAFFIC_LIGHT_STATES = ["red", "orange", "green"];
const INTERVAL = 1200;

export const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState(TRAFFIC_LIGHT_STATES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = TRAFFIC_LIGHT_STATES.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % TRAFFIC_LIGHT_STATES.length;
        return TRAFFIC_LIGHT_STATES[nextIndex];
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.trafficlight}>
        {TRAFFIC_LIGHT_STATES.map((c) => (
          <Light key={c} color={c} active={c === currentColor} />
        ))}
      </div>
    </div>
  );
};

import { Light } from "../Light/Light";
import style from "./style.module.css";

const TRAFFIC_LIGHT_STATES = ["red", "orange", "green"];

export const TrafficLight = ({ color }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.trafficlight}>
        {TRAFFIC_LIGHT_STATES.map((c) => (
          <Light key={c} color={c} active={c === color} />
        ))}
      </div>
    </div>
  );
};

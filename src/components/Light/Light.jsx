import style from "./style.module.css";

export const Light = ({ color, active }) => {
  return (
    <div
      className={`${style.light} ${style[color]} ${active && style.active}`}
    />
  );
};

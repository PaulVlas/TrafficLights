import styles from "./style.module.css";

export const Button = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  );
};

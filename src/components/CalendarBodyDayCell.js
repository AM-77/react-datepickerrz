import React from "react";
import styles from "../styles.css";

function DayCell(props) {
  const { initDate, activeColor, index, onDateChange } = props;
  return (
    <div
      key={index}
      onClick={() => onDateChange({ ...initDate, d: index + 1 })}
      className={`${styles.day} ${
        index + 1 === initDate.d ? styles.active : ``
        }`}
    >
      <div
        className={styles.day_contianer}
        style={index + 1 === initDate.d ? { backgroundColor: activeColor } : {}}
      >
        <p className={styles.day_text}>{index + 1}</p>
      </div>
    </div>
  );
}
export default DayCell;

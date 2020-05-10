import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { daysInMonth } from "../util/date";

import styles from "../styles.css";

function CalendarBody(props) {
  const { propDate } = props;
  const [date, setDate] = useState(propDate);
  const [firstDay, setFirstDay] = useState(
    new Date(propDate.y, propDate.m - 1, 1).getDay()
  );
  const [daysCount, setDaysCount] = useState(
    daysInMonth(propDate.y, propDate.m)
  );

  useEffect(() => {
    const { propDate } = props;
    setDate(propDate);
    setFirstDay(new Date(propDate.y, propDate.m - 1, 1).getDay()),
      setDaysCount(daysInMonth(propDate.y, propDate.m));
  }, date);

  const renderEmptyDays = () => {
    let empty = [];
    for (let i = 0; i < firstDay; i++) {
      empty.push(
        <div key={i} className={`${styles.day} ${styles.empty}`}>
          <p></p>
        </div>
      );
    }
    return empty;
  };

  const renderDays = () => {
    const { onDateChange, activeColor } = props;
    let days = [];
    for (let i = 0; i < daysCount; i++) {
      days.push(
        <div
          key={i}
          onClick={() => onDateChange({ ...propDate, d: i + 1 })}
          className={`${styles.day} ${
            i + 1 === propDate.d ? styles.active : ``
          }`}
        >
          <div
            className={styles.day_contianer}
            style={i + 1 === propDate.d ? { backgroundColor: activeColor } : {}}
          >
            <p className={styles.day_text}>{i + 1}</p>
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className={styles.calander_body_container}>
      <div className={styles.days_container}>
        {renderEmptyDays()}
        {renderDays()}
      </div>
    </div>
  );
}

CalendarBody.propTypes = {
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CalendarBody;

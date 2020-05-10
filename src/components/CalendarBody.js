import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import DayCell from "./CalendarBodyDayCell";
import { daysInMonth } from "../util/date";

import styles from "../styles.css";

function CalendarBody(props) {
  const { initDate } = props;
  const [date, setDate] = useState(initDate);
  const [firstDay, setFirstDay] = useState(
    new Date(initDate.y, initDate.m - 1, 1).getDay()
  );
  const [daysCount, setDaysCount] = useState(
    daysInMonth(initDate.y, initDate.m)
  );

  useEffect(() => {
    const { initDate } = props;
    setDate(initDate);
    setFirstDay(new Date(initDate.y, initDate.m - 1, 1).getDay()),
      setDaysCount(daysInMonth(initDate.y, initDate.m));
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

  const renderDayCell = () => {
    let days = [];
    for (let i = 0; i < daysCount; i++) {
      days.push(<DayCell index={i} {...props} />);
    }
    return days;
  };

  return (
    <div className={styles.calander_body_container}>
      <div className={styles.days_container}>
        {renderEmptyDays()}
        {renderDayCell()}
      </div>
    </div>
  );
}

CalendarBody.propTypes = {
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CalendarBody;

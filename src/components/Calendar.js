import React, { Component } from "react";
import PropTypes from "prop-types";

import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

import styles from "../styles.css";

function Calendar(props) {
  const { date, lang, onDateChange, display, activeColor } = props;
  return (
    <>
      {display && (
        <div className={styles.calander_container}>
          <CalendarHead lang={lang} date={date} onDateChange={onDateChange} />
          <CalendarBody
            initDate={date}
            onDateChange={onDateChange}
            activeColor={activeColor}
          />
        </div>
      )}
    </>
  );
}

Calendar.propTypes = {
  display: PropTypes.bool.isRequired,
  date: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default Calendar;

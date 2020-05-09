/**
 * @param {string} inputStyle custom style for the date input
 * @param {string} activeColor custom color for the selected date
 * @param {boolean} dark toggle the dark theme
 * @param {(string | Date)} date the default value
 * @param {string} lang the langauge of the calender
 * @param {func} onPickDate on date pick handler
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { date2dmy, str2dmy } from "./util/date";
import parseCSS from "./util/css";

import DateInput from "./components/DateInput";
import Calendar from "./components/Calendar";

import styles from "./styles.css";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { date, inputStyle } = this.props;
    this.state = {
      date: typeof date === "string" ? str2dmy(date) : date2dmy(date),
      isInputFocus: false,
      inputStyle,
    };
    this.datepickerRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("click", this.hideCalendar, true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState((state) => ({ inputStyle: this.props.inputStyle }));
    }
  }

  formatDate = () => {
    return `${y}/${m}/${d}`;
  };

  onDateChange = (date) => {
    const { onPickDate } = this.props;
    const { d, m, y } = date;

    const pickedDate = {
      day: d,
      month: m,
      year: y,
      date: new Date(this.formatDate),
    };

    this.setState(
      (state) => ({ date }),
      () => onPickDate(pickedDate)
    );
  };

  onInputFocus = () => {
    this.setState((state) => ({ isInputFocus: true }));
  };

  hideCalendar = (e) => {
    if (
      this.datepickerRef.current &&
      !this.datepickerRef.current.contains(e.target)
    ) {
      this.setState((state) => ({ isInputFocus: false }));
    }
  };

  render() {
    const { lang, activeColor, dark } = this.props;
    const { date, inputStyle } = this.state;

    return (
      <div className={styles.react_datepickerrz_container}>
        <div
          ref={this.datepickerRef}
          className={`${styles.react_datepickerrz} ${
            dark ? styles.dark_theme : styles.light_theme
          }`}
        >
          <DateInput
            onInputFocus={this.onInputFocus}
            date={date}
            inputStyle={parseCSS(inputStyle)}
            onDateChange={this.onDateChange}
          />
          <Calendar
            display={this.state.isInputFocus}
            lang={lang}
            date={date}
            onDateChange={this.onDateChange}
            activeColor={activeColor}
          />
        </div>
      </div>
    );
  }
}

DatePicker.defaultProps = {
  inputStyle: ``,
  activeColor: "#119955",
  dark: false,
  date: new Date(),
  lang: "en",
};

DatePicker.propTypes = {
  inputStyle: PropTypes.string,
  activeColor: PropTypes.string,
  dark: PropTypes.bool,
  date: PropTypes.string || PropTypes.instanceOf(Date),
  lang: PropTypes.string,
  onPickDate: PropTypes.func.isRequired,
};

export default DatePicker;

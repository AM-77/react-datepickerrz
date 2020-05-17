import React, { useState } from "react";
import DatePicker from "react-datepickerrz";
import { TwitterPicker } from "react-color";

import "./index.css";

function App() {
  const [inputStyle, setInputStyle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  var onPickDate = (date) => {
    setSelectedDate(date);
  };

  const [pickerProps, setPickerProps] = useState({
    activeColor: "#119955",
    date: "12-12-2012",
  });

  const onInputChange = (prop, value) => {
    setPickerProps({ [prop]: value });
  };

  const changeInputStyle = (e) => {
    const value = e.target.value;
    setInputStyle(value);
  };

  return (
    <div className="container">
      <h1>react-datepickerrz demo</h1>
      <div className="content">
        <div className="props">
          <div className="prop">
            <label>inputStyle</label>
            <textarea
              className="input-style"
              onChange={changeInputStyle}
              placeholder="write css properties, something like:          color: red;            background-color: red;              and press apply. "
            ></textarea>
            <button onClick={() => onInputChange("inputStyle", inputStyle)}>
              apply
            </button>
          </div>
          <div className="prop">
            <label>activeColor</label>
            <TwitterPicker
              color={pickerProps.activeColor}
              onChangeComplete={(color) =>
                onInputChange("activeColor", color.hex)
              }
            />
          </div>
          <div className="prop one-line">
            <div className="dark">
              <label>dark</label>
              <input
                type="checkbox"
                name="dark"
                onChange={(e) => onInputChange("dark", e.target.checked)}
              />
            </div>
            <div className="lang">
              <label>lang</label>
              <select
                name="lang"
                onChange={(e) => onInputChange("lang", e.target.value)}
                defaultValue="en"
              >
                <option value="en">en</option>
                <option value="fr">fr</option>
                <option value="de">de</option>
                <option value="es">es</option>
                <option value="it">it</option>
              </select>
            </div>
          </div>
        </div>
        <div className="datepicker-container">
          <div className="selected-date">
            <p>
              {selectedDate
                ? `${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`
                : pickerProps.date}
            </p>
          </div>
          <div className="date-picker">
            <DatePicker {...pickerProps} onPickDate={onPickDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

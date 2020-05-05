/**
* @param {string} buttonType the main button type (hmaburger, plus, vert-dots or hori-dots)       
* @param {number} dimension the buttons dimension   
* @param {number} top the offsetTop position of the nav       
* @param {number} left the offsetLeft position of the nav
* @param {string} backgroundColor the main button background color       
* @param {string} itemBackgroundColor the nav item button background color       
* @param {string} buttonColor the color of the main button      
* @param {string} direction the direction of the nav when opened (left, right, top, bottom and circular)
* @param {number} distance the distance between the main button and the nav items ** required when direction='circular' **
* @param {number} degree the angle of the circle ** required when direction='circular' **
* @param {array} buttonsList the nav items [{ onClick: click handler, src: 'for the icon'}]
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { date2dmy, str2dmy } from './util/date'
import parseCSS from './util/css'

import DateInput from './components/DateInput'
import Calander from './components/Calander'

import styles from './styles.css'

class DatePicker extends Component {
    constructor(props){
        super(props)
        const { date } = this.props
        this.state = {
            date: (typeof date === "string") ? str2dmy(date) : date2dmy(date),
            isInputFocus: false
        }
        this.datepickerRef = React.createRef();
    }

    componentDidMount(){
        document.addEventListener("click", this.hideCalander, true);
    }

    onDateChange = date => {
        const { onPickDate } = this.props
        const { d, m, y } = date

        const pickedDate = {
            day: d,
            month: m,
            year: y,
            date: new Date(`${y}/${m}/${d}`)
        }
        
        this.setState((state) => ({ date }), () => onPickDate(pickedDate))
    }    

    onInputFocus = () => {
        this.setState((state) => ({isInputFocus: true}))
    }

    hideCalander = e => {
        if (this.datepickerRef.current && !this.datepickerRef.current.contains(e.target)) {
            this.setState((state) => ({isInputFocus: false}))    
        }
    }

    render() {
        const { inputStyle, lang, activeColor, dark } = this.props
        const { date } = this.state

        return (
            <div ref={this.datepickerRef} className={`${styles.react_datepick} ${dark ? styles.dark_theme : styles.light_theme}`} >            
                <DateInput onInputFocus={this.onInputFocus} date={date} inputStyle={parseCSS(inputStyle)} onDateChange={this.onDateChange} />
                <Calander display={this.state.isInputFocus} lang={lang} date={date} onDateChange={this.onDateChange} activeColor={activeColor}/>
            </div>
        )
    }
}

DatePicker.defaultProps = {
    inputStyle: ``,
    activeColor: '#119955',
    dark: false,
    date: new Date(),
    lang: "en"
}
  
DatePicker.propTypes = {
    inputStyle: PropTypes.string,
    activeColor: PropTypes.string,
    dark: PropTypes.bool,
    date: PropTypes.string,
    lang: PropTypes.string,
    onPickDate: PropTypes.func.isRequired
}
  
export default DatePicker

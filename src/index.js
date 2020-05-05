import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { date2dmy, str2dmy, date2str } from './util/date'
import parseCSS from './util/css'

import DateInput from './components/DateInput'
import Calander from './components/Calander'

import styles from './styles.css'

class DatePicker extends Component {
    constructor(props){
        super(props)
        const { date, inputStyle } = this.props
        this.state = {
            date: (typeof date === "string") ? str2dmy(date) : date2dmy(date),
            isInputFocus: false,
            inputStyle
        }
        this.datepickerRef = React.createRef();
    }

    componentDidMount(){
        document.addEventListener("click", this.hideCalander, true);
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState((state) => ({
                ...state,
                ...this.props,
                date: (typeof this.props.date === "string") ? str2dmy(this.props.date) : date2dmy(this.props.date),
            }))
        }
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
        const { lang, activeColor, dark } = this.props
        const { date, inputStyle } = this.state

        return (
            <div className={styles.react_datepick_container}>
                <div ref={this.datepickerRef} className={`${styles.react_datepick} ${dark ? styles.dark_theme : styles.light_theme}`} >            
                    <DateInput onInputFocus={this.onInputFocus} date={date} inputStyle={parseCSS(inputStyle)} onDateChange={this.onDateChange} />
                    <Calander display={this.state.isInputFocus} lang={lang} date={date} onDateChange={this.onDateChange} activeColor={activeColor}/>
                </div>
            </div>
        )
    }
}

DatePicker.defaultProps = {
    inputStyle: ``,
    activeColor: '#119955',
    dark: false,
    date: date2str(new Date()),
    lang: "en"
}
  
DatePicker.propTypes = {
    inputStyle: PropTypes.string,
    activeColor: PropTypes.string,
    dark: PropTypes.bool,
    date: PropTypes.string || PropTypes.object,
    lang: PropTypes.string,
    onPickDate: PropTypes.func.isRequired
}
  
export default DatePicker

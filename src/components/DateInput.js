import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { dateFormater, dmy2str } from '../util/date'

import styles from '../styles.css'

class DateInput extends Component {

    constructor(props){
        super(props)

        const { date, inputStyle } = this.props
        this.state={
            inputStyle,
            date,
            inputValue: dmy2str(date)
        }
    }
    
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            const { date } = this.props
            this.setState((state) => ({date, inputValue: dmy2str(date)}))
        }
    }

    onInputChange = e => {
        const value = e.target.value
        this.setState((state) => ({inputValue: value}), () => {
            const { onDateChange } = this.props
            if(value.length === 10){
                try {
                    const date = dateFormater(value)
                    onDateChange(date)
                } catch (error) {
                    onDateChange(dateFormater(new Date()))
                }
            }
        })
    }

    render() {
        const { onInputFocus } = this.props
        const { inputStyle, inputValue } = this.state
        return (
            <input className={styles.input_field} onFocus={onInputFocus} onChange={this.onInputChange} type="text" value={inputValue} style={inputStyle} maxLength="10" placeholder='dd/mm/yyyy' />
        )
    }
}
  
DateInput.propTypes = {
    inputStyle: PropTypes.object.isRequired,
    onDateChange: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
    onInputFocus: PropTypes.func.isRequired
}
  
export default DateInput

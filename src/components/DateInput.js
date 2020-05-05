import React, { Component } from 'react'
import PropTypes from 'prop-types'
import parseCSS from '../util/css'
import { dateFormater, dmy2str } from '../util/date'

class DateInput extends Component {

    constructor(props){
        super(props)

        const { date, inputStyle } = this.props
        this.state={
            inputStyle: parseCSS(inputStyle),
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
            <input onFocus={onInputFocus} onChange={this.onInputChange} type="text" value={inputValue} style={inputStyle} maxLength="10" placeholder='dd/mm/yyyy' />
        )
    }
}

DateInput.defaultProps = {
    inputStyle: `
        padding: 5px 8px;
        border: 1px solid rgba(33, 33, 33, 0.25);
        background-color: #f8f9fa;
        font-size: 14px;
        border-radius: 3px;
        outline: none;
        width: 180px;
        text-align: center;
        box-shadow: rgba(33, 33, 33, 0.5) 0px 0px 4px -2px;
    `
}
  
DateInput.propTypes = {
    inputStyle: PropTypes.string,
    onDateChange: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
    onInputFocus: PropTypes.func.isRequired
}
  
export default DateInput

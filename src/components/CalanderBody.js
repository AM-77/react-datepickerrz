import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { daysInMonth } from '../util/date'

import styles from '../styles.css'

class CalanderBody extends Component {

    constructor(props){
        super(props)
        const { date } = this.props
        this.state = {
            date,
            firstDay: new Date(date.y, date.m - 1, 1).getDay(),
            daysCount: daysInMonth(date.y, date.m)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            const { date } = this.props
            this.setState((state) => ({
                date,
                firstDay: new Date(date.y, date.m - 1, 1).getDay(),
                daysCount: daysInMonth(date.y, date.m)
            }))
        }
    }

    renderEmptyDays = () => {
        const { firstDay } = this.state
        let empty = []
        for(let i = 0; i < firstDay; i++){
            empty.push(<div key={i} className={`${styles.day} ${styles.empty}`}><p></p></div>)
        }
        return empty
    }

    renderDays = () => {
        const { onDateChange } = this.props
        const { daysCount, date } = this.state
        let days = []
        for(let i = 0; i < daysCount; i++){
            days.push(<div key={i} onClick={() => onDateChange({...date, d: i + 1 })} className={`${styles.day} ${ i+1 === date.d ? styles.active : `` }`}><div className={styles.day_contianer}><p className={styles.day_text}>{ i + 1 }</p></div></div>)
        }
        return days
    }

    render() {
        return (
            <div className={styles.calander_body_container}>
                <div className={styles.days_container}>
                    { this.renderEmptyDays() }
                    { this.renderDays() }
                </div>
            </div>
        )
    }
}

CalanderBody.propTypes = {
    date: PropTypes.object.isRequired,
    onDateChange: PropTypes.func.isRequired
}
  
export default CalanderBody
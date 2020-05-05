import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { months, days, addMonth, addYear, subMonth, subYear } from '../util/date'
import Arrow from './Arrow'

import styles from '../styles.css'


class CalanderHead extends Component {
    render() {
        const { date, lang, onDateChange } = this.props
        return (
            <div className={styles.calander_header_container}>
                <div className={styles.cart}></div>
                <div className={styles.control}>
                    <div className={`${styles.prev} ${styles.year}`} onClick={() => onDateChange(subYear(date))}>
                        <Arrow left double />
                    </div>

                    <div className={`${styles.prev} ${styles.month}`} onClick={() => onDateChange(subMonth(date))}>
                        <Arrow left/>
                    </div>

                    <div className={styles.display}>
                        <div className={styles.month}><p>{ months[lang][date.m - 1] }</p></div>
                        <div className={styles.year}><p>{ date.y }</p></div>
                    </div>

                    <div className={`${styles.next} ${styles.month}`} onClick={() => onDateChange(addMonth(date))}>
                        <Arrow />
                    </div>

                    <div className={`${styles.next} ${styles.year}`} onClick={() => onDateChange(addYear(date))}>
                        <Arrow double/>
                    </div>
                </div>
                <div className={styles.week_days}>
                    { days[lang].map((day, i) => <p key={i} className={styles.w_day}>{day}</p>) }
                </div>
            </div>
        )
    }
}
 

CalanderHead.propTypes = {
    date: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
}
  
export default CalanderHead
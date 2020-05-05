import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CalanderHead from './CalanderHead'
import CalanderBody from './CalanderBody'

import styles from '../styles.css'

class Calander extends Component {
    render() {
        const { date, lang, onDateChange, display} = this.props
        return (<React.Fragment>
            {
                display && <div className={styles.calander_container}>
                    <CalanderHead lang={lang} date={date} onDateChange={onDateChange}/>
                    <CalanderBody date={date} onDateChange={onDateChange} />
                </div> 
            }
            </React.Fragment>
        )
    }
}

Calander.propTypes = {
    display: PropTypes.bool.isRequired,
    date: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
}
  
export default Calander
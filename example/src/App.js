import React from 'react'
import DatePicker from 'react-datepick'

import './index.css'

function App () {

    const onChange = (date) => {
        console.log(date)
    }

    return (<div className="container">
        <DatePicker 
            // inputStyle = {`
            //     height: 30px;
            //     width: 220px;
            //     border-radius: 15px;
            //     outline: none;
            //     background-color: #f1f2f3;
            //     border-color: #21212154;
            // `}
            onPickDate={onChange}
            date="12-12-2002"
            lang="en"
        />
    </div>)
}

export default App

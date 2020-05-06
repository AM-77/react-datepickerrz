import React from 'react'
import DatePicker from 'react-datepickerrz'
import { TwitterPicker } from 'react-color'

import './index.css'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            pickerProps: {
                onPickDate: this.onPickDate,
                activeColor: "#119955",
                date: "12-12-2012"
            },
            inputStyle: "",
            selectedDate: null
        }
    }

    onPickDate = date => {
        this.setState((state) => ({
            selectedDate: date
        }))
    }

    onInputChange = (prop, value) => {
        this.setState((state) => ({ 
            pickerProps: {
                ...state.pickerProps,
                [prop]: value
            }
         }))
    } 

    changeInputStyle = e => {
        const value = e.target.value
        this.setState((state) => ({inputStyle: value}))
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            
        }
    }

    render(){
        return (
            <div className="container">
                <h1>react-datepickerrz demo</h1>
                <div className="content">
                    <div className='props'>
                        <div className="prop">
                            <label>inputStyle</label>
                            <textarea className="input-style" onChange={this.changeInputStyle} placeholder="write css properties, something like:          color: red;            background-color: red;              and press apply. "></textarea>
                            <button onClick={() => this.onInputChange("inputStyle", this.state.inputStyle)}>apply</button>
                        </div>
                        <div className="prop">
                            <label>activeColor</label>
                            <TwitterPicker color={this.state.pickerProps.activeColor} onChangeComplete={ (color) => this.onInputChange("activeColor", color.hex) } />
                        </div>
                        <div className="prop one-line">
                            <div className="dark">
                                <label>dark</label>
                                <input type='checkbox' name="dark" onChange={(e) => this.onInputChange("dark", e.target.checked)} />
                            </div>
                            <div className="lang">
                                <label>lang</label>
                                <select name="lang" onChange={(e) => this.onInputChange("lang", e.target.value)} defaultValue="en">
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
                            <p>{
                                this.state.selectedDate ? `${this.state.selectedDate.day}/${this.state.selectedDate.month}/${this.state.selectedDate.year}` : this.state.pickerProps.date
                            }</p>
                        </div>
                        <div className="date-picker">
                            <DatePicker {...this.state.pickerProps} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

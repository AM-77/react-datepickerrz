# react-datepick

> An a11y, customizable, zero-dependency datepicker component for React

[![NPM](https://img.shields.io/npm/v/react-datepick.svg)](https://www.npmjs.com/package/react-datepick) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save react-datepick
```

**or**

```bash
yarn add react-datepick
```

## Usage

```jsx
import React, { Component } from 'react'

import DatePicker from 'react-datepick'


export default class Example extends Component {

    onDatePick = date => {
        // the date object stucture => {
        //     day: number,
        //     month: number,
        //     year: number,
        //     date: Date
        // }

        // do whatever you want with date
    }

    render() {
        return <DatePicker
            inputStyle={`color: red; background-color: blue; border-radius: 50%`}
            activeColor="#119955"
            dark={true}
            date={new Date()}
            lang="es"
            onPickDate={this.onDatePick} />
    }
}

```



## Props



##### inputStyle

`type: string, isRequired: false, default: empty'`

	The custom style of the input field

##### activeColor

`type: string, isRequired: false, default: '#119955'`

	The bg color of the selected date on the calander

##### date

`type: string | Date, isRequired: false, default: new Date()`

	The default value of the datepicker

##### lang

`type: string, isRequired: false, default: 'en'`

	The datepicker langauge, supported languages: [en, fr, it, es, de]


##### onPickDate

`type:  funcion, isRequired: true`

	The date change handler


## Examples

To run the exemple you need to:

-   clone this repo 
-   inside the react-datepick folder run: `yarn` or `npm i` then `yarn build` or `npm build`
-   inside the example folder run: `yarn` or `npm i` then `yarn start` or `npm start`


## Screenshots


**default datepicker**

![circular down 180 deg](./screenshots/down-180.gif)

**dark datepicker**

![circular customizable degree](./screenshots/270.gif)


**customized datepicker input**

![circular 360](./screenshots/360.gif)


## Contribution

Feel free to raise an [Issue](https://github.com/AM-77/react-datepick/issues) or submit a [PR](https://github.com/AM-77/react-datepick/pulls).

## Copyright and license

Code copyright 2020 AM-77. Code released under [MIT license](https://github.com/AM-77/react-datepicks/blob/master/LICENSE).
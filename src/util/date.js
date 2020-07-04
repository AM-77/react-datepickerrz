const daysInMonth = (y, m) => new Date(y, m, 0).getDate()

const isLeapYear = y => daysInMonth(2, y) === 29

const str2dmyList = str => str.split(/-|\//ig).map(s => parseInt(s))

const str2dmy = str => str2dmyList(str).reduce((o, v, i) => { i === 0 ? o['d'] = v : (i === 1 ? o['m'] = v : o['y'] = v); return o }, {})

const dmy2str = ({ d, m, y }) => `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`

const date2str = d => dmy2str({ d: d.getDate(), m: d.getMonth() + 1, y: d.getFullYear() })

const date2dmy = d => ({ d: d.getDate(), m: d.getMonth() + 1, y: d.getFullYear() })

const str2date = str => new Date(str.split(/-|\//ig).revese().join('-'))

const isValideDate = str => {
    if (((/((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})/.test(str)) || (/((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})/.test(str)))) {
        const [d, m, y] = str2dmyList(str)
        if(m === 2) {
            const isLeap = isLeapYear(y)
            return !((!isLeap && d > 28) || (isLeap && d > 29))
        }
        return true
    }
    return false
}

const dateFormater = date => {
    if (typeof date === 'string') {
        if (isValideDate(date)) {
            return str2dmy(date)
        }
    } else if (date instanceof Date) {
        return date2dmy(date)
    }

    throw new Error('Unvalid date format. try with: dd-mm-yyyy or dd/mm/yyyy')   
}

const months = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    it: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
}

const days = {
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    fr: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    it: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']
}

const addMonth = ({ d, m, y }) => ((m === 12) ? ({ d, m: 1, y: y + 1 }) : ({ d, m: m + 1, y }))

const subMonth = ({ d, m, y }) => ((m === 1) ? ({ d, m: 12, y: y - 1 }) : ({ d, m: m - 1, y }))

const addYear = ({ d, m, y }) => ({ d, m, y: y + 1 })

const subYear = ({ d, m, y }) => ({ d, m, y: y - 1 })

export { daysInMonth, isLeapYear, str2dmy, dmy2str, date2str, date2dmy, str2date, isValideDate, dateFormater, months, days, addMonth, subMonth, addYear, subYear }
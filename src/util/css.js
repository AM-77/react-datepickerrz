
const toCamelCase = str => str.replace(/-([a-z])/ig, (all, l) => l.toUpperCase())

const parseCSS = css => {
    let cssObject = {}
    const cssProps = css.trim().split(';')
    cssProps[cssProps.length - 1] === '' && cssProps.pop()
    let length = cssProps.length
    let propVal
    for (let i = 0; i < length; i++) {
        propVal = cssProps[i].split(':')
        if (propVal.length !== 2) {}
        cssObject[toCamelCase(propVal[0].trim())] = propVal[1].trim()
    }
    return cssObject
}

export default parseCSS

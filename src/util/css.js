
const toCamelCase = str => str.replace(/-([a-z])/ig, (all, l) => l.toUpperCase())

const parseCSS = css => {
    let cssObject = {}
    const cssProps = css.trim().split(";")
    cssProps[cssProps.length - 1] === "" && cssProps.pop()
    let length = cssProps.length, prop_val
    for(let i = 0; i < length; i++){
        prop_val = cssProps[i].split(":")
        cssObject[toCamelCase(prop_val[0].trim())] = prop_val[1].trim()
    }
    return cssObject
}

export default parseCSS

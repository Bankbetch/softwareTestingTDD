const join = require('join-array');

function greet(name) {
    if (name === null) {
        return `Hello, my friend.`
    }
    if (name.constructor !== Array && name == name.toUpperCase()) {
        return `HELLO ${name.toUpperCase()}!`
    }
    if (name.constructor === Array) {
        if (name[1] == name[1].toUpperCase()) {

            return `Hello, ${name[0]} and ` + `${name[2]}.` + ` AND HELLO ${name[1]}!`
        }
        if (name.length > 2) {
            const config = {
                array: name,
                separator: ', ',
                last: ', and ',
                max: 3,
                maxMessage: (missed) => `(${missed})`
            };
            const list = join(config)
         // outStr = name.slice(0, -1).join(', ') + ', and ' + name.slice(-1);
            return `Hello, ${list}.`
        }
        return `Hello, ${name.join(" and ")}.`
    }
    return `Hello, ${name}.`
}


module.exports = greet
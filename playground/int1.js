flattenObject = (obj) => {
    const flattened = {};

    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(flattened, flattenObject(obj[key]))
        } else {
            flattened[key] = obj[key]
        }
    });

    return flattened
};

const notFlat = {
    a:2,
    b: {
        c:3
    }
};

console.log(
    flattenObject(notFlat)
);

var x = null;

console.log(x);

console.log(Math.max(1,2));





// fi dat isnt found, then shoud it be 'NULL'
var someString = " This is a random string with a dumb year 1992-5 , there is no real reason though.";

var arrayStrings = someString.split(/[ -]+/);
console.log(arrayStrings);

for (let i of arrayStrings) {
    var maybeInteger = parseInt(i);
}

if (someString.match(/[a-zA-Z]/i)) {
    // alphabet letters found
    console.log("yes, contains Alphanumeric");
}

console.log(Number("d2"));

if (!Number(someString)){
    console.log("This cannot be a number withoutheavy parsing")
}

numberValidation = (year) => {
    if(!Number(year)){
        return "NULL"
    } else {
        return year
    }
}

console.log(numberValidation("123"));
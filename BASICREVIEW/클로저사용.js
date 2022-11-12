function makeClosure() {
    const val1 = 100;
    const val2 = 200;
    const val3 = function () {
        console.log('hello')
    }

    return {
        getval1: function () { return val1 },
        getval2: function () { return val2 },
        getval3: function () { return val3 },
    }
}

let result = makeClosure()
console.log(result.getval1())
console.log(result.getval2())
console.log(result.getval3())
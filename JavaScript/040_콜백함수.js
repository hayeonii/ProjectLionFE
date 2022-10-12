// callback function
    // 나중에 부르겟다!!
    // 파라미터로 함수를 전달받아, 함수 내부에서 실행하는 함수

function sum(x, y, 콜백함수){
    콜백함수(x + y);
    return x + y;
}

function documentWriter(s){
    document.write('콜백함수',s)
}

// sum(10, 20, console.log) // 30
sum(10, 20, documentWriter) // 콜백함수30

// callback function: 함수를 argument로 전달해서 코드 어딘가에서 호출해줌

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50]
arr.map(제곱) // [100, 400, 900, 1600, 2500]

function 제곱(x){
    return x ** 2
} // x => x**2
arr.map(x => x**2)


function 두배(x){
    console.log(x * 2)
}

let arr2 = [10, 20, 30, 40, 50]
arr2.forEach(두배)

// 문제: 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해 주세요
let arr3 = [10, 20, 30, 40, 50]
arr3.map(x => x ** 2)

let result = []
arr3.forEach(x =>{
    result.push(x ** 2)
})
console.log(result)
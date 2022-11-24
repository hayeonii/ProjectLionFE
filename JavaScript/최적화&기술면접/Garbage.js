// * 메모리 누수와 Garbage Collection
let me = {age: 30};
let you = me; // 참조카운트 : 2

me = null; // 공간 비워줌, 참조카운트 : 1
you = null; // 참조카운트 : 0

let x = {
    y: {
        z : 1
    }
}
// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object 2라고 하자.

let a = x; // object1의 참조카운트는 2
x = 1; // obejct1의 참조카운트 1

let b = a.y // obejct2의 참조카운트는 2 (a.y, b)
a = 2 // obejct1의 참조카운트는 0 ()
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현함

function outer() {
    let privateVal = ['test']

    function getPrivate() {
        return privateVal
    }

    return getPrivate
}

const getPrivateData = outer();
const secretVal = getPrivateData();
console.log(secretVal)



// * 좋은 습관 기르기
// 1. 배열이나 객체를 불변하는 객체처럼 다루기
const aespa = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']
const aespa2 = aespa.map(i => i + '💖')
aespa.forEach((item, index) => {
    aespa[index] = item + '💖'
})

console.log(aespa)
console.log(aespa2)
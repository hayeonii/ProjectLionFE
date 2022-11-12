// 스코프 == 코드의 명세
// 스코프 : 변수의 유효 범위
// 전역 스코프, 함수 스코프, 블록 스코프

// 전역 스코프
let val = 1;
console.log(val);

// 함수 스코프 : 함수 안에 들어있는 스코프
    // 함수 안에 들어있는 변수는 전역 공간에서 불러낼 수 없다, 함수 안에서만 유요함
function test() {
    // let val2 = 1;
    let a = 1;
    let b = 2;
    return a + b
}

let a = 20;

console.log(val2) // referenceError
console.log(test()) // 3 출력
console.log(b) /// b is not defined


// 함수 안에 정의된 변수는 외부에서는 접근할 수 없음
// 대신 함수 안에서 정의된 변수는 함수 안에서는 어디든 접근이 가능
// 스코프 체이닝 : 계속 바깥쪽 스코프를 타고 가면서 원하는 데이터를 찾음
let x = 1;

const myFunc = function () {
    // g = 10;
    // 선언 키워드가 없으면 무조건 전역변수가 됨
    let b = 2;

    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        x = x + b + c;
        console.log(a); // 12
    }

    myFunc2();
}

myFunc();
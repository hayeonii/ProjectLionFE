// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}()); // 함수가 끝나면 메모리를 반환하기 때문에

    
// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리


// 연습문제
// 중간고사 점수의 평균을 구하는 코드를 작성해 주세요
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 내 답안
function avg(data) {
    return data.map((x) => x.중간고사점수).reduce((acc, cur) => a + b, 0) / data.length; 
}


// 풀이 답안
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}

function 평균값구하기(data) {
    중간고사점수 = data.map((x) => x.중간고사점수)
    중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));


// call by value, reference, sharing
// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 된다
// call by value(값의 전달) : JS는 call by value밖에 없다
// call by reference(참조-주소값의 전달)
// 넘버값은 원시타입이라서 변경이 안되고 배열은 참조타입이라서 변경됨
// 변수가 가리키고 있는 공간에 저장된 '값'이 전달된다

let test = [10, 20, 30]

function 함수(a){
    a[0] = 1000
}

함수(test) // 변경됨


let test2 = 100
function 함수(a) {
    a = 1000
}

함수(test2) // 변경안됨

// JS에는 call by value만 존재한다 call by reference가 없는데 그 개념이 모호하기 때문에(주소가 복사해서 넘어감) sharing이라고 하기도 함
// 반례
var x = {};
function test(y){
    y = 1000;
}

test(x)
x


// 클로저
function 제곱(x) {
    function 승수(y){
        return y ** x
    }
    return 승수
    // 승수()가 아니라 승수 리턴
}
// 안의 x값이 밖의 x값을 참조할 수 있다!

let 제곱2 = 제곱(2)

제곱2(3) // 9
제곱2(10) // 100

console.log(제곱(2)(3)) // 9



function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
        // 함수의 경우 가장 가까운 스코프에서 변수 할당받게됨
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

// 클로저 사용하면 가장 좋은 점: 정보의 은닉
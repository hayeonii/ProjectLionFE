// 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100


// --------------------- //

async function f() {
    return 'hello world';
}

console.log('!');
f()
    .then(메시지 => {
        alert(메시지)
        return 메시지.split(' ')[0]
    })
    .then(메시지 => {
        alert(메시지)
        return 메시지[0]
    })
console.log('!!');

// ! - !! - hello world - hello


// ------------------------ //

// 모던 자바스크립트 예제
// 기다린 것
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 프로미스가 이행될 때까지 기다림 (*)

    alert(result); // "완료!"
}

f();


// 기다리지 않은 것
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = promise; // 프로미스가 이행될 때까지 기다리지 않음

    console.log(result) // pending
    alert(result); // [object Promise]
    return 'hello'
}

f(); // 완료됐을 때 Promise {<fulfilled>: 'hello'}


// 집합, 합집합, 교집합, 차집합

let x = new Set('abcdeeeeeeee');
console.log(x);
console.log(x.size)

// 문제
회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
let writer = new Set(회사게시판)
writer.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of writer) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}

let s = new Set('abcdeeeeeeeee');
s.size;
s.add('f');
s.has('a')

// Set을 순환하기
for (var variable of s) {
    console.log(variable);
}

// 값이 배열인 경우 - 중복을 제거해서 반환
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss);


let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value))
// 합집합
let union = new Set([...a].concat(...b))
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));
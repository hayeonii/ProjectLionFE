// 왜 사용해야하는가?
let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
}

let newBook = {}

newBook['책이름'] = 'JavaScript'; // form에서 입력 받은 값
newBook['책가격'] = '1000000';
newBook['저자'] = '세원, 석규, 슬기';
newBook['출판일'] = '22.10.30';
// 조금 더 효율적으로 할 수 있는 방법 - 생성자함수

// 생성자함수
function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

// let data = Book('CSS', 10, '유진', '22.12.30');
// console.log(data) // undefined - return이 생략되어있음

let data = new Book('CSS', 10, '유진', '22.12.30');
console.log(data) // 객체처럼 출력됨, 장점 - 코드 깔끔, 메모리 효율 굿

let book1 = new Book('HTML', 10, '유진', '22.12.30');
let book2 = new Book('CSS', 20, '유진', '23.12.30');
let book3 = new Book('JS', 30, '유진', '24.12.30');

console.log(book1, book2, book3)
/*
    Book {책이름: 'HTML', 책가격: 10, 저자: '유진', 출판일: '22.12.30'} 
    Book {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '23.12.30'} 
    Book {책이름: 'JS', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}
*/

// new 키워드를 사용했을 경우 내부적으로 아래처럼 작동
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this
}

// 생성자 함수의 목적 - 객체를 쉽게 생성
// https://ko.javascript.info/constructor-new


let 맵 = new Map(Object.entries({'one': 1, 'two':2})) // 많이 사용
let 오브젝트 = Object.fromEntries(맵)

function Person(name, age){
    // new가 위의 Person 오브젝트와 함께 씌어졌을 때 아래가 생략되어 동작함
    // const this = Object.create(Person.prototype)
        
    this.name = name
    this.age = age

    // 생략되어서 동작
    // return this
}

// 동작은 하지만 보이지 않게 behind에서 실행된다
// 1. Object.create(Person.prototype)을 this에 할당해줌으로써 Object 프로토타입이 Person에 옮겨짐
// 2. 그것이 this에 할당됨
// 3. this에 key, value 형식으로 데이터가 붙여짐
// 4. 최종적으로 오브젝트가 리턴된다

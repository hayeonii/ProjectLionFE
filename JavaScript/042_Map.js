// 오브젝트와 맵이 어디서 뭐가 다른건지?
// 오브젝트 - 사물을 설명하기 위해 있는 것
// 맵 - 해시테이블처럼 키와 값이 1:1 연결, 자료를 매핑해 주는 것, 순환

let m =  new Map();

m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루') 
    .set([1, 2], '리얼리?')
    // 점 찍어서 연결 .. 메서드 체이닝

console.log(m) // Map(4) {'하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4}

console.log(m.get('하나')) // 1
console.log(m.get(ture)) // true // object에선 불가함
console.log(m.get([1, 2])) // undefined - 이렇게는 호출 불가, 각 객체가 다른 주소값을 가진다

/* 
    Python vs JavaScript
    1.
    python에서 아래 값은 다르게 나온다
    x = [1,2]
    id(x)

    y = [1,2]
    id(y)

    x == y // true
    x is y // flase

    2. JavaScript
    [1, 2] === [1, 2] // false
    [1, 2] == [1, 2] // false
    let x = [1, 2]
    let y = [1, 2]
    x == y // false
    x === y // false
*/

let m2 =  new Map();
let test = [1, 2];

m.set(test, '리얼리?')
console.log(m.get(test)) // 이렇게는 호출이 된다
// 변수에 할당하면 같은 메모리 주솟값을 바라보고 있어서

// Map에 해당 key값이 있는지 확인하기
m.has('하나') // true

// Map에 값을 제거하기
m.delete('하나') // 제거
m.has('하나') // 결과확인 - false

// 크기 구하기
m.size //length와 유사한 기능

// let data = new Map({'one':1, 'two': 2}) // error // Map은 순서가 있는(순회가능한) 객체에서 사용 가능
let data = new Map([['one', 1], ['two', 2]]) // O
let data2 = new Map(Object.entries({'one': 1, 'two':2})) // O //.entries는 알아두기
// let data3 = new Map('hello world') // X
// let data4 = new Map([10, 20, 30, 40]) // X 

// Map의 장점! 직접 순회가 가능하다
let data5 = {'one': 1, 'two':2}
for (const i of data5) {
    console.log(i)
} // error

let data6 = {'one': 1, 'two':2}
for (const i of Object.entries(data6)) {
    console.log(i)
} // 복잡한 순회

let m3 =  new Map();

m3.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루') 
    .set([1, 2], '리얼리?')

for (const [i, j] of m3){
    console.log(i, j)
}

m3.keys()
m3.values()
m3.entries()

// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one': 1, 'two':2})) // 많이 사용
let 오브젝트 = Object.fromEntries(맵)

function Person(name, age){
    // new가 위의 Person 오브젝트와 함께 씌어졌을 때 아래가 생략되어 동작함
    
}

//바벨
    // 모던 JS 코드를 구 표준을 준수하는 코드로 바꿔 줌
    

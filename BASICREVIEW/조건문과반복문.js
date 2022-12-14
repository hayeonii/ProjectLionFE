const result = Math.floor((Math.random() * 10) + 1); // 1부터 10까지 랜덤
console.log(result)

// 조건문: 여러 값들이 주어지고 그 값의 종류에 따라 처리방법을 달리 해야할 경우 사용

// if (result > 5) {
//     console.log('값이 5보다 큼')
// } else if (result < 5) {
//     console.log('값이 5보다 작음')
// } else {
//     console.log('5임')
// }


// if문에 비해 가독성이 좋다
// switch (result) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('5보다 작다');
//         break;
//     case 5:
//         console.log('5임');
//         break;
//     case 6:
        
//     case 7:

//     case 8:

//     case 9:

//     case 10:
//         console.log('5보다 큼');        
//         break;
// }

// () 안에는 표현식만 가능 (선언식 불가능)
switch (result) {
    case result > 5:
        console.log('5보다 큼');
        break;
    case result < 5:
        console.log('5보다 작다');
        break;
    default:
        console.log('5임');
        break;
}

// 삼항연산자
result > 5 ? console.log('5보다 큽니다.') :
    result < 5 ? console.log('5보다 작습니다.') :
        console.log('5입니다.');


// 반복문!!!
// for in : 객체를 순환하고 싶을 때, key값으로 순회
const snack = { 새우깡: 1000, 짱구: 1500, 홈런볼: 2000 };
Object.prototype.꼬북칩 = 3000;
const drink = { 콜라: 1000, 사이다: 2000 }

for (let item in snack) {
    // hasOwnProperty: 객체가 특정 프로퍼티를 가지는지 확인합니다. 프로토타입에 등록된 프로퍼티는 제외합니다.
    if (snack.hasOwnProperty(item)) {
        console.log(`${item}의 가격은 ${snack[item]} 입니다.`);
    }
}


// for of : 순환 가능한 것 모두 순환 시킬 수 있다
// 순환 가능한 것 : array, string, arguments, nodeList, set, map
    // 단!!!! object는 순환할 수 없다

const heros = ['spiderman', 'blackwidow', 'batman', 'ironman', 'doctorstrange'];
const newHeros = [];
for (const hero of heros) {
    console.log(hero);
    newHeros.push(hero + "!!");
}

console.log(newHeros);

for (const item of heros[0]) {
    console.log(item);
}

function test(a, b, c) {
    for (const arg of arguments) {
        console.log(arg);
    }
}

test(1, 3, 5);

const mySet = new Set([1, 2, 3, 4, 5]);


for (const item of mySet) {
    console.log(item);
}

mySet.add(10);
console.log(mySet);


const testArr = [1, 2, 3, 3, 4, 4, 5, 7, 7, 7, 7];

const mySet2 = new Set(testArr);

console.log(mySet2);
console.log(Array.from(mySet2));



// 콜백함수 : 매개변수로 전달하는 함수 --> 오직 JS에만 존재하는 기능!! (신기한 기능이지용)

// forEach(), map()

// forEach()
    // 단점 : 원본데이터를 바꿔버린다

// map()
    // 원본 배열을 바꾸지 않을 때 좋음

    const list = [
        { name: '재현', age: 10 },
        { name: '원범', age: 9 },
        { name: '김진', age: 8 },
        { name: '유진', age: 12 }
    ];

    // 데이터에 있는 나이를 일괄적으로 1살씩 올리고 싶다면
    
    // list.forEach((item) => {
    //     item.age += 1;
    // });
    
    // const newList = [];
    
    // list.forEach((item) => {
    //     const newObj = { name: item.name };
    //     newObj['age'] = item.age + 1;
    //     // {name: '재현', age: 11}
    //     newList.push(newObj);
    // })
    
    // console.log(list);
    // console.log(newList);
    
    const newList = list.map((item) => {
        const newObj = { name: item.name, age: item.age + 1 };
        return newObj;
    });
    
    console.log(list);
    console.log(newList);


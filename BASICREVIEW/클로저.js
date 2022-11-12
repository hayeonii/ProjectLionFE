const myFunc = function () {
    // 클로저 공간
    let a = 1;
    let b = 2;

    const myFunc2 = function () {
        let b = 5;
        let c = 6;

        a = a + b + c;
        console.log(a); // 12
    }

    return myFunc2;
}

const innerFunc = myFunc();
innerFunc(); // 클로저 함수
// 클로저 공간에 접근할 수 있는 함수가 클로저 함수

/* 
    myFunc 함수는 myFunc2를 반환함
    이때 myFunc 함수는 return 키워드를 만나서 종료됨
    그리고 안에 있는 프로퍼티들은 삭제가 됨
    클로저 = 테크닉(기술) - 외부에서 절~대 접근할 수 없는 프로퍼티를 만드는 테크닉

    함수안에 함수가 있는데
    안에 있는 함수변수가 
    필요한 값이 외부함수에 있으면, 
    가비지콜렉터가 다 지우지 않고 
    클로저공간을 만들어준다.
*/

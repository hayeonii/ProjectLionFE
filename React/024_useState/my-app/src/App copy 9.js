function App() {
return (
    <Hello name="licat"/>
);
}
function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numComponentsArr = num.map(v => <p key={v.toString()}>안녕, {name} {v}호</p>)
    // key를 인덱스로 잡는 것은 권장하지 않는다
    // const numComponentsArr = num.map((v ,i) => <p key={i.toString()}>안녕, {name} {i}호 / {name} {v}호</p>)

    console.log(numComponentsArr)

return(
    <div>
        {/* 콤마를 없애고 요소를 밖으로 꺼내 준다. 이것을 리스트로 렌더링 한다고 얘기함. 리스트로 렌더링 할 때에는 고유한 key값을 주어야 함 */}
        {/* {['hello', 'world', 3, 4, 5]} */}

        {numComponentsArr}

        {/* 드물지만 이런 경우가 생길 수 있으므로 권장하지 않는다 (키의 중복) */}
        {/* {numComponentsArr.concat(numComponentsArr)} */}

        {/* <h1>안녕, {name} 1호</h1>
        <h1>안녕, {name} 2호</h1>
        <h1>안녕, {name} 3호</h1>
        <h1>안녕, {name} 4호</h1>
        <h1>안녕, {name} 5호</h1>
        <h1>안녕, {name} 6호</h1>
        <h1>안녕, {name} 7호</h1>
        <h1>안녕, {name} 8호</h1>
        <h1>안녕, {name} 9호</h1>
        <h1>안녕, {name} 10호</h1> */}
    </div>
)
}
export default App;

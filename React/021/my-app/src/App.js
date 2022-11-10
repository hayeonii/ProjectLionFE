function One(props) {
  return (
    <>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 2}입니다.</p>
    </>

  )
}

function Two({name, age}) {
  return (
    <>
      <p>안녕하세요!</p>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age * 3}입니다.</p>
    </>
  )
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <One name="하연" age={10}/>
      <Two name="연" age={10}/>
    </>
  )
}

export default App;

function One(props) {
  console.log('// one 시작')
  console.log(props)
  // console.log(props.children[0])
  console.log('// one 끝')

  return(
    <div>
      {props.children}
    </div>
  )
}

function Two(props) {
  console.log('// two 시작')
  console.log(props)
  console.log('// two 끝')

  return (
    <div>
      {props.children}
    </div>
  )
}

function Three(props) {
  console.log('// three 시작')
  console.log(props)
  console.log('// three 끝')

  return (
    <div>
      {/* {props.children} */}
      hello
    </div>
  )
}

function Four(props) {
  console.log('// Four 시작')
  console.log(props)
  console.log('// Four 끝')

  return (
    <div>
      {/* {props.children} */}
      hello
    </div>
  )
}

function Five() {
  return (
    <div>
      <p>hello</p>
      <Six />
    </div>
  )
}

function Six() {
  return (
    <div>hello</div>
  )
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        {/* 로딩이 안됨 */}
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One - p</p>
        <Two>
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three />
        {/* four/five의 차이는 요소들을 chldrend으로 받을 것이냐, props로 받아서 컨트롤을 할 것이냐 */}
        <Four></Four>
        <Five />
      </One>
    </div>
  );
}

// react = 오브젝트로 요소들을 계속 내려줌
// 렌더링이 많지 않은 페이지에서 react를 사용하면 그렇게 성능의 향상을 높인다고 볼 수는 없음
/*
  리액트는 요소들을 경량화된 오브젝트(=버츄얼 돔)로 렌더링한다
  -> 요소의 상태가 바뀌었을 때 전체를 렌더링 하지 않고 // 변경이 일어난 요소들만 렌더링 할 수 있다는 특징이 있다
  -> 이런 특징을 이용해서 프로젝트 규모, 특징을 고려해서 리액트를 적용하는게 장점이 된다면 적용하는 게 좋다
*/
export default App;

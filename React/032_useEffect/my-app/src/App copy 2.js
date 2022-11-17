import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  })
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;

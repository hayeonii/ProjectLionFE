function Three({price}) {
  return <div>{price}</div>
}

// One & Two를 price 전달자로만 사용
function Two({price}) {
  return(
    <div>
      <Three price={price}/>
    </div>
  )
}

function One({price}) {
  return (
    <div>
      <Two price={price}/>
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶음

  return (
    <div>
      <One price={value}/>
    </div>
  )
}
import React, { useEffect, useLayoutEffect, useState } from "react";

/*
  1. useLayoutEffect는 useEffect보다 먼저 실행됨. 
    따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다.

  2-1. 렌더링 되었을 때 useLayoutEffect return의 콜백함수 실행됨. 그리고 useLayoutEffect가 실행됨.
  2-2. 렌더링 되었을 때 useEffect return의 콜백함수 실행됨. 그리고 useEffect가 실행됨.
  
  3. 깜빡임 해결하고 싶다? useEffect -> useLayoutEffect

  ----------------
  
  # useEffect

  - 화면이 실행되고 나서 그려지므로 깜빡임이 발생함
  - 깜빡이면 useEffect 대신 useLayoutEffect를 발생하면 된다.
  - 브라우저 페인팅 스크린이 되기 전에 레이아웃이 실행되기 때문에 깜빡임이 발생하는 것이다
  - 변수 감시용
  - 페인팅 후에 작업을 해줘야 할 때 사용

  # useLayoutEffect

  - 깜빡임이 발생할 때 사용
  - 페인팅 전에 작업을 해줘야 할 때 사용
*/ 

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  // useEffect(()=>{
  //   console.log('useEffect 3')
  //   return () => {
  //     console.log('useEffect return_3')
  //   }
  // }, [num])


  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])


  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;
import { useState } from 'react'

// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// // 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력



import NavBar from './components/NavBar/navBar'

export default function App() {
  return (
    <NavBar />
  )
}

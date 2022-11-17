import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function Index() {
  return (
    <h1>Index</h1>
  )
}

function Login() {
  return (
    <h2>Login</h2>
  )
}

function Study() {
  return (
    <h2>Study</h2>
  )
}

function StudyDetail() {
  // console.log(props) // 이전 버전에서는 props로 처리했었음
  // 내가 한것.. 구현 못함
  const location = useLocation()
  console.log(location)
  const { num } = useParams()
  console.log(num)
  // const locationIndex = location.split('/')[2]
  // useParams()

  // useParams()를 이용하지 못했음 나는 .. ㅠ

  // fetch로 데이터를 받아오는 예시
  // fetch(`www.test.abc/${num}`) 의 형식으로 데이터를 가지고 와서 아래에 데이터를 뿌려주면 blog 형식이 완성됨
  return (
    <>
      <h2>StudyDetail</h2>
      <p>{num}번 게시물에 오신 것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</p>
    </>
  )
}

// function Test() {
//   const location = useLocation()
//   console.log(location)
//   const { test } = useParams()
//   console.log(test)
//   return ( <p>{location}, {test} </p>)
// }

function Notice() {
  return (
    <h2>Notice</h2>
  )
}

function Chat(){
  const location = useLocation()
  const params = useParams()

  console.log(location)
  console.log(params)

  const 채딩방번호 = location.pathname.split('/')[2]

  // 호준님 자주 하는 방식, 권하진 않음
  // 사용 이유: url 주소의 깊이가 깊어졌을 때 앞이 있는 값이 필요한 경우가 종종 있음
  return <p>{채딩방번호}번 게시물에 오신것을 환영합니다. 여기는 {채딩방번호}번 게시물의 채팅방입니다.</p>
}

function Memo(){
  const location = useLocation()
  const { num } = useParams()

  console.log(location)

  // 깔끔한 방식
  return <p>{num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모방입니다.</p>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/study" element={<Study/>}></Route>
        <Route path="/study/:num" element={<StudyDetail />}></Route>
        {/* <Route path="/study/:num/:test" element={<StudyDetail />}></Route> */}
        <Route path="/study/:num/chat" element={<Chat />}/>
        <Route path="/study/:num/memo" element={<Memo />}/>
        <Route path="/notice" element={<Notice/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
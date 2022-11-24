import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// http://localhost:3000/blog/1?name=hojun&age=10
  // search에 쿼리스트링이 함께 들어옴
function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        <Route path="/blog" element={<BlogHome />}/>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function BlogHome() {
  return <h1>Blog Home</h1>
}

function Blog(){
	const location = useLocation();
  console.log(location)
  console.log(location.pathname)
  console.log(location.pathname.slice(-1))

  // const urlSlicingValue = location.pathname.slice(-1)
  const urlSlicingValue = location.pathname.split('/')[2]
  const imgUrl = `http://test.api.weniv.co.kr/asset/img/${urlSlicingValue}/thumbnailImg.jpg`
  console.log(imgUrl)

  return (
    <>
      <h1>hello Blog</h1>
      <img src={imgUrl} alt="" />  
    </>
  )
}

export default App;
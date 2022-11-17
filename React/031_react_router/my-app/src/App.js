import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index() {
  return <h2>Index</h2>
}

function A() {
  return <h2>A</h2>
}

function B() {
  return <h2>B</h2>
}

function C() {
  return <h2>C</h2>
}

function PageC() {
  const location = useLocation()
  const {id} = useParams()
  return <h2>c - {id}</h2>
}

function D() {
  return <h2>D</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/a" element={<A/>}></Route>
        <Route path="/b" element={<B/>}></Route>
        <Route path="/c" element={<C/>}></Route>
        <Route path="/c/:id" element={<PageC/>}></Route>
        <Route path="/c/d" element={<D/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
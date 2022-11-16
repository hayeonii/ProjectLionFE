import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Link to="/">Main</Link>
      <Link to="/product">Product Details</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/buy">Buy</Link>


      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/buy" element={<Buy/>} />
      </Routes>
    </BrowserRouter>
  )
}

function Main() {
  return <h1>메인입니다</h1>
}

function Product() {
  return <h2>Product입니다.</h2>
}

function ProductDetails() {
  return <h2>Product Details입니다.</h2>
}

function Cart() {
  return <h2>Cart 입니다.</h2>
}

function Buy() {
  return <h2>Buy 입니다.</h2>
}


export default App;

import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index() {
  return <h1>Home page</h1>
}

function ProductDetail() {
  const { id } = useParams()

  return <h2>Product Detail Page {id}</h2>
}

function ProductNotice() {
  const { id } = useParams()

  return <p>ProductNotice {id}</p>
}

function Cart() {
  return <h2>Cart</h2>
}

function UserInfo() {
  return <h2>UserInfo</h2>
}

function Coupon() {
  const { id } = useParams()

  return <p>{id} Coupon</p>
}

function Question() {
  const { id } = useParams()

  return <p>{id} Question</p>
}

function UserNotice() {
  const { id } = useParams()

  return <p>{id} UserNotice</p>

}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path="notice" element={<ProductNotice />}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/user" element={<UserInfo />} />
        <Route path="/user/*" element={<Outlet />}>
          <Route path="coupon" element={<Coupon />}/>
          <Route path="question" element={<Question />}/>
          <Route path="notice" element={<UserNotice />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
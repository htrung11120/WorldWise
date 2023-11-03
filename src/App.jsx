import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Home from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import PageNav from "./components/PageNav"
function App() {

  return (
    <BrowserRouter>
      <PageNav />

      <Routes>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

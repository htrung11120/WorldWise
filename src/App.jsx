import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Home from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import CountriesList from "./components/CountriesList"
import City from "./components/City"
import Form from "./components/Form"
import "../src/index.css"
const BASE_URL = "http://localhost:8000/cities"
function App() {
  const [cities, setcities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setcities(data);
      } catch {
        alert('There was an erroe loading data .....')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<AppLayout />}>

          <Route index element={<Navigate to='cities' />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

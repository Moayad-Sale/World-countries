import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages and Layout
import Navbar from './layouts/Navbar'
import Countries from './worldCountries/Countries'
import CountryDetails from './worldCountries/CountryDetails'

const routersFromElements = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
    </Route>
)

const router = createBrowserRouter(routersFromElements)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App

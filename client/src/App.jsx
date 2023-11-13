import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalogue from './components/catalogue/Catalogue'

function App() {

    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/catalogue' element={ <Catalogue /> } />
            </Routes>

           
        </div>
    )
}

export default App

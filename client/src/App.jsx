import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalogue from './components/catalogue/Catalogue'
import CreateGame from './components/create-game/CreateGame'

function App() {

    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/catalogue' element={ <Catalogue /> } />
                <Route path='/games/create' element={ <CreateGame /> } />
            </Routes>

           
        </div>
    )
}

export default App

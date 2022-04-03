import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Desc from './Desc'
import Finalided from './Finalided'
import './styles.css'

const App = () => {
    return (
        <div className='Main'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/desc" element={<Desc />} />
                <Route path='/finalided' element={<Finalided />} />
            </Routes>
        </div>
    )
}

export default App
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ListChar from './components/ListChar'
import DetailsChar from './components/DetailsChar'
import CreateChar from './components/CreateChar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListChar />} />
        <Route path="/characters" element={<CreateChar />} />
        <Route path="/:characterId" element={<DetailsChar />} />
      </Routes>
    </>
  )
}

export default App

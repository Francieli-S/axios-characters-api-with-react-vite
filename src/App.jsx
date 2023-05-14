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
      <ListChar />
      <DetailsChar />
      <CreateChar />
      {/* <Routes>
        <Route path="/" element={<ListChar />} />
        <Route path="/:characterId" element={<DetailsChar />} />
        <Route path="/characters" element={<CreateChar />} />
      </Routes> */}
    </>
  )
}

export default App

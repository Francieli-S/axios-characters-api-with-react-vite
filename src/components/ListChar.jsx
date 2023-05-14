import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ListChar() {
  const [characters, setCharacters] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ih-crud-api.herokuapp.com/characters')
      console.log(response.data)
      if (response.status === 200) {
        setCharacters(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Characters List</h1>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/${character.id}`}>{character.name}</Link>
          </div>
        )
      })}
      {/* <DetailsChar characters={characters} /> */}
    </div>
  )
}

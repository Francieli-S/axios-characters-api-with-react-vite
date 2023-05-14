import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailsChar() {
  const [characterDetails, setCharacterDetails] = useState([])
  const { characterId } = useParams()

  useEffect(() => {
    axios
      .get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then((response) => {
        setCharacterDetails(response.data)
      })
      .catch((error) => console.log(error))
  }, [characterId])

  return (
    <div>
      <h3>Name</h3>
      <p>{characterDetails.name}</p>
      <h3>Occupation</h3>
      <p>{characterDetails.occupation}</p>
      <h3>Weapon</h3>
      <p>{characterDetails.weapon}</p>
      <h3>Debt</h3>
      <p>{characterDetails.debt === true ? 'Yes' : 'No'}</p>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsChar({ characters }) {
  const [characterDetails, setCharacterDetails] = useState([])
  const { characterId } = useParams()

  //   useEffect(() => {
  //     const characterToShow = characters.filter((character) => character.id === +characterId)
  //     setCharacterDetails(characterToShow.length > 0 ? characterToShow[0] : undefined)
  //   }, [characterId, characters])

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

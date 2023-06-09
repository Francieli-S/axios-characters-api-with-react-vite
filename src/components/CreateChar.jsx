import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateChar() {
  const [name, setName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [weapon, setWeapon] = useState('')
  const [debt, setDebt] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = { name: name, occupation: occupation, weapon: weapon, debt: debt }
    console.log('BODY', body)

    axios
      .post('https://ih-crud-api.herokuapp.com/characters', body)
      .then(() => {
        setName('')
        setOccupation('')
        setWeapon('')
        setDebt(false)

        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h3>Add New Characters</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        <label>Occupation</label>
        <input
          type="text"
          name="occupation"
          onChange={(e) => setOccupation(e.target.value)}
          value={occupation}
        />
        <label>Weapon</label>
        <input
          type="text"
          name="weapon"
          onChange={(e) => setWeapon(e.target.value)}
          value={weapon}
        />
        <label>Debt</label>
        <input
          type="checkbox"
          name="debt"
          onChange={(e) => setDebt(e.target.checked)}
          checked={debt}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

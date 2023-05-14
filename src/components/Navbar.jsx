import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/characters">
        <button>Creat Character</button>
      </NavLink>
    </nav>
  )
}

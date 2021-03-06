import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


// styles
import './Navbar.css'

// components
import Searchbar from '../searchbar/Searchbar'


export default function Navbar() {
  const {color} = useContext(ThemeContext)

  return (
    <div className='navbar' style = {{ background: color }}>
      <nav> 
        <Link to="/" className='brand'>
          <h1>Chef Chioma</h1>
        </Link>
        <Searchbar/>
        <Link to = '/create'>Create Recipe</Link>
        
      </nav>
    </div>
  )
}

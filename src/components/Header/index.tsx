import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as C from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <C.HeaderStyle>
      <C.Title open={menuOpen}>
        A3X
        <span>Monitoria</span>
      </C.Title>
      <C.MenuToggle onClick={handleMenuClick}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </C.MenuToggle>
      <C.List open={menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link className="budget" to="/budget">
          Orçamento
        </Link>
      </C.List>
    </C.HeaderStyle>
  )
}

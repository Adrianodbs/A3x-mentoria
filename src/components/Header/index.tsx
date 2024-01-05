import { Link } from 'react-router-dom'
import * as C from './styles'

export default function Header() {
  return (
    <C.HeaderStyle>
      <h1>
        A3X
        <span>Monitoria</span>
      </h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nós</Link>
        <Link className="budget" to="/budget">
          Orçamento
        </Link>
      </ul>
    </C.HeaderStyle>
  )
}

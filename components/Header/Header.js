import Link from 'next/link'
import GlobalNav from '../GlobalNav/GlobalNav'
import Logo from '../Logo/Logo'
import './Header.scss'

const Header = (props) => (
  <header className="Header">
      <Logo />
      <nav className="GlobalNav">
        <GlobalNav {...props} />
      </nav>
  </header>
);

export default Header

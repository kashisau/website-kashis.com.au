import Link from 'next/link'

const linkStyle = {

}

const GlobalNav = () => (
  <ul className="GlobalNav--menu">
    <li><Link href="/"><a style={linkStyle}>Home</a></Link></li>
    <li><Link href="/about"><a style={linkStyle}>About</a></Link></li>
    <li><Link href="/contact"><a style={linkStyle}>Contact</a></Link></li>
    <li><Link href="/blog"><a style={linkStyle}>Blog</a></Link></li>
  </ul>
);

export default GlobalNav;

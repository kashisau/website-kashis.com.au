import MainMenuLink from './MainMenuLink';

const GlobalNav = (props) => (
  <ul className="GlobalNav--menu">
    <MainMenuLink linkName="PageHome" href="/" {...props}>Home</MainMenuLink>
    <MainMenuLink linkName="PageAbout" href="/about" {...props}>About</MainMenuLink>
    <MainMenuLink linkName="PageContact" href="/contact" {...props}>Contact</MainMenuLink>
    <MainMenuLink linkName="PageBlog" href="/blog" {...props}>Blog</MainMenuLink>
  </ul>
)

export default GlobalNav;

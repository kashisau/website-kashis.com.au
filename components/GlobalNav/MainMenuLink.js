import Link from 'next/link'

/**
 * Applies a class to if the link page is equal to the active page.
 * @param {string} linkPage 
 * @param {string} activePage 
 * @returns {string} The active page class for the link if applicable
 */
const activeState = (linkPage, activePage) => 
  (activePage === linkPage)? 'is-active' : ''

const MainMenuLink = ({linkName, activePageName, href, children}) =>
  <li className={activeState(linkName, activePageName)}><Link href={href}><a>{children}</a></Link></li>

export default MainMenuLink
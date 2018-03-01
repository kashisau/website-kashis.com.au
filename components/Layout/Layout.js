import License from '../License/License'
import Header from '../Header/Header'
import '../../styles/styles.scss'

const Layout = (props) => (
    <div className={props.pageName}>
        <Header activePageName={props.pageName} />
        <main role="main">
          {props.children}
        </main>
        <footer>
            <License />
        </footer>
    </div>
)

export default Layout
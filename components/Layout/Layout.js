import License from '../License/License'
import Header from '../Header/Header'

const Layout = (props) => (
    <div className={props.pageName}>
        <Header activePageName={props.pageName} />
        <main role="main">
          {props.children}
        </main>
        <footer>
            <License />
        </footer>
        <style jsx global>{`
          body {
            background-color: #f3f3f3;
          }
        `}</style>
    </div>
)

export default Layout
import React from 'react';
import Logo from '../Logo/Logo';
import License from '../License/License';
import GlobalNav from '../GlobalNav/GlobalNav';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';
import { Switch, Route } from 'react-router-dom';

const Layout = ({match}) => (
    <div className="page">
        <header>
            <Logo />
            <nav classname="GlobalNav">
                <GlobalNav />
            </nav>
        </header>
        <main role="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </main>
        <footer>
            <License />
        </footer>
    </div>
);

export default Layout;
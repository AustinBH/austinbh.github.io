import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

const InfoMenu = props => {
    return <Router>
                <Menu pointing secondary color='blue'>
                    <Menu.Item icon='map' as={NavLink} exact to='/about' activeClassName='active' name='About' />
                    <Menu.Item icon='sitemap' as={NavLink} exact to='/projects' activeClassName='active' name='Projects' />
                    <Menu.Item icon='sitemap' as={NavLink} exact to='/resume' activeClassName='active' name='Resume' />
                </Menu>
                <Route path='/' exact render={null} />
                <Route path='/about' exact render={props => <About {...props} />} />
                <Route path='/projects' exact render={props => <Projects {...props} />} />
                <Route path='/resume' exact render={props => <Resume {...props} />} />
                <div/>
        </Router>
}

export default InfoMenu;
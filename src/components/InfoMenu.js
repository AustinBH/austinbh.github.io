import React from 'react';
import { Menu } from 'semantic-ui-react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Blog from './Blog';

const InfoMenu = props => {
    return <Router>
                <Menu pointing secondary >
                    <Menu.Item icon='map' as={NavLink} exact to='/about' activeClassName='active' name='About' />
                    <Menu.Item icon='file code' as={NavLink} exact to='/projects' activeClassName='active' name='Projects' />
                    <Menu.Item icon='file alternate' as={NavLink} exact to='/resume' activeClassName='active' name='Resume' />
                    <Menu.Item icon='book' as={NavLink} exact to='/blog' activeClassName='active' name='Blog' />
                </Menu>
                <Switch>
                    <Route path='/' exact render={null} />
                    <Route path='/about' exact render={props => <About {...props} />} />
                    <Route path='/projects' exact render={props => <Projects {...props} />} />
                    <Route path='/resume' exact render={props => <Resume {...props} />} />
                    <Route path='/blog' render={props => <Blog {...props} />} />
                </Switch>
                <div/>
        </Router>
}

export default InfoMenu;
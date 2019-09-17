import React from 'react';
import { Segment, Icon, Header, Grid, Dropdown, Button } from 'semantic-ui-react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import BlogPost from './BlogPost';

const Blog = props => {
    
    const handleEvent = (ev) => {
        if (ev.type === 'click') {
            props.history.push('/')
        } else if (ev.which === 13) {
            props.history.push('/')
        }
    }

    return <Segment className='section-holder' style={{ textAlign: 'left' }}>
        <Icon name='close' style={{ float: 'right', cursor: 'pointer' }} onClick={handleEvent} onKeyPress={handleEvent} tabIndex='0' />
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='book' circular size='mini' />
            <Header.Content>Blog</Header.Content>
        </Header>
        <Router>
            <Grid columns='1'>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button.Group color='teal'>
                            <Button icon='pencil alternate' style={{ color: 'black' }} content='All Posts' target='_blank' rel='noopener noreferrer' href='https://dev.to/austinbh'/>
                            <Dropdown className='button icon' floating>
                                <Dropdown.Menu>
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/1`} activeClassName='active' text='How I learned to stop worrying and love the MVP' />
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/2`} activeClassName='active' text='Rails Layouts' />
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/3`} activeClassName='active' text='For loops, for...of and forEach oh my!' />
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/4`} activeClassName='active' text='Classes as an Organizational Tool' />
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/5`} activeClassName='active' text='Why You Should Use Arrow Functions in React' />
                                    <Dropdown.Item icon='file alternate' as={NavLink} exact to={`${props.match.url}/6`} activeClassName='active' text="Spreadin' Out" />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Route path={`${props.match.path}/:id`} render={props => <BlogPost {...props} />} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    </Segment>
}

export default Blog
import React from 'react';
import { Segment, Icon, Header, Grid, Dropdown, Button } from 'semantic-ui-react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import BlogPost from './BlogPost';
import { blogs } from './blogs/BlogHolder';
import BlogPreview from './BlogPreview';

const Blog = props => {

    const handleClick = input => {
        props.history.push(`/blog/${input}`)
        window.scrollTo(0,0)
    }

    return <Segment className='section-holder' style={{ textAlign: 'left' }}>
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
                                    {props.match && props.match.path ?
                                        blogs.map((blog, idx) => {
                                            return <Dropdown.Item key={idx} icon='file alternate' as={NavLink} exact to={`${props.match.url}/${idx+1}`} activeClassName='active' text={blog.title} />
                                        })
                                        :
                                        null
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        {props.match && props.match.path ?
                            <>
                                <Route path={`${props.match.path}`} exact render={props => <BlogPreview {...props} handleOnClick={handleClick} />} />
                                <Route path={`${props.match.path}/:id`} exact render={props => <BlogPost {...props} />} />
                            </>
                            :
                            null
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    </Segment>
}

export default Blog
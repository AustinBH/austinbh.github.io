import React from 'react';
import { Segment, Icon, Header, Grid, Button } from 'semantic-ui-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import BlogPost from './BlogPost';
import BlogPreview from './BlogPreview';

const Blog = props => {

    // Need to scroll the window back since we don't want to have people seeing a blog from the bottom of the page
    const handleClick = input => {
        console.log(input)
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
                        <Button icon='pencil alternate' style={{ color: 'black' }} content='All Posts' target='_blank' rel='noopener noreferrer' href='https://dev.to/austinbh'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        {props.match && props.match.path ?
                            <>
                                <Route path={props.match.path} exact render={props => <BlogPreview {...props} handleOnClick={handleClick} />} />
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
import React from 'react';
import { blogs } from './blogs/BlogHolder';
import { Card, Header, Button } from 'semantic-ui-react';

// Here we want to have the reversed order of blogs displayed so that we can see the most recent posts.
// The spread operator is used so that we do not mutate our blogs info.
const orderedBlogs = [...blogs].reverse()

const BlogPreview = props => {
    return orderedBlogs.map(blog => {
        return <Card key={blog.id} className='blog-info'>
            <Card.Header>
                <Header as='h4'>
                    {blog.title}
                </Header>
            </Card.Header>
            <Card.Description>
                {blog.preview}
            </Card.Description>
            <Card.Content extra>
                <Button onClick={() => props.handleOnClick(blog.id)} color='vk' content='See More'/>
            </Card.Content>
        </Card>
    })
}

export default BlogPreview;
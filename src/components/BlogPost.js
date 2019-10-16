import React from 'react';
import { Pagination } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown/with-html';
import { blogs } from './blogs/BlogHolder';
import CodeBlock from './blogs/CodeBlock';

const BlogPost = props => {

    const findPost = () => {
        let postNum = props.match.url.split('/').slice(-1)[0]
        return <ReactMarkdown style={{textAlign: 'left'}} source={blogs[postNum-1].text} renderers={{code: CodeBlock}}/>
    }

    const handlePageChange = (ev, { activePage }) => {
        props.history.push(`/blog/${activePage}`)
    }

    return props.match && props.match.url ?
        <>
            <div style={{ textAlign: 'center' }}>
                <Pagination
                    className='blog-info'
                    activePage={props.match.url.split('blog/')[1]}
                    onPageChange={handlePageChange}
                    totalPages={blogs.length}
                />
            </div>
            {findPost()}
        </>
    :
        null
}

export default BlogPost;
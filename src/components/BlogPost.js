import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from './blogs/BlogHolder';
import CodeBlock from './blogs/CodeBlock';

const BlogPost = props => {

    const [ellipsis, setEllipsis] = useState('...')
    const [first, setFirst] = useState(
        {
            'aria-label': 'First item',
            content: '«',
        }
    )
    const [last, setLast] = useState(
        {
            'aria-label': 'Last item',
            content: '»',
        }
    )
    const [boundary, setBoundary] = useState(1)
    const [sibling, setSibling] = useState(1)

    // Here we are updating our pagination rules for mobile to display a much smaller pagination item
    const setMobile = () => {
        setEllipsis(null)
        setFirst(null)
        setLast(null)
        setBoundary(0)
        setSibling(0)
    }

    // Just need to check screen width to determine mobile or desktop view
    useEffect(() => {
        return window.screen.width < 800 ? setMobile() : undefined
    }, [ellipsis, first, last, boundary, sibling])

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
                    ellipsisItem={ellipsis}
                    firstItem={first}
                    lastItem={last}
                    boundaryRange={boundary}
                    siblingRange={sibling}
                />
            </div>
            {findPost()}
        </>
    :
        null
}

export default BlogPost;
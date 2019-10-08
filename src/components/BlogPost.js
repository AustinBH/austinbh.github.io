import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { blogs } from './blogs/BlogHolder';
import CodeBlock from './blogs/CodeBlock';

const BlogPost = props => {

    const findPost = () => {
        let postNum = props.match.url.split('/').slice(-1)[0]
        return <ReactMarkdown source={blogs[postNum-1].text} renderers={{code: CodeBlock}}/>
    }

    return <>
        {props.match && props.match.url ?
            findPost()
            :
            null
        }
    </>
}

export default BlogPost;
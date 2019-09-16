import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { blogs } from './blogs/1'
import CodeBlock from './blogs/code-block'

const BlogPost = props => {


    const findPost = () => {
        let postNum = props.match.url.slice(-1)
        switch (postNum) {
            case '1':
                console.log('1 here')
                return <ReactMarkdown source={blogs.one} renderers={{code: CodeBlock}}/>
            case '2':
                return <ReactMarkdown source={blogs.two} renderers={{ code: CodeBlock }}/>
            case '3':
                return <ReactMarkdown source={blogs.three} renderers={{ code: CodeBlock }}/>
            case '4':
                return <ReactMarkdown source={blogs.four} renderers={{ code: CodeBlock }}/>
            case '5':
                return <ReactMarkdown source={blogs.five} renderers={{ code: CodeBlock }}/>
            case '6':
                return <ReactMarkdown source={blogs.six} renderers={{ code: CodeBlock }}/>
            default:
                return null
        }
    }

    return <>
        {findPost()}
    </>
}

export default BlogPost;
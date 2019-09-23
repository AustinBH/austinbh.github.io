import React from 'react';
import { shallow } from 'enzyme';
import ReactMarkdown from 'react-markdown/with-html';
import BlogPost from '../components/BlogPost';

it('renders without crashing', () => {
    shallow(<BlogPost />)
});
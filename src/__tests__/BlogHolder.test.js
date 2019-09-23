import { blogs } from '../components/blogs/BlogHolder';

it('Each blog has a title', () => {
    blogs.forEach(blog => {
        expect.anything(blog['title'])
    })
})

it('Each blog has content', () => {
    blogs.forEach(blog => {
        expect.anything(blog['text'])
    })
})
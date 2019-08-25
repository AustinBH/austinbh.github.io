import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react';

const About = props => {

    const handleClick = () => {
        props.history.push('/')
    }

    return <Segment className='section-holder'>
        <Icon name='close' style={{ float: 'right', cursor: 'pointer' }} onClick={handleClick} />
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='info' circular />
            <Header.Content>About</Header.Content>
        </Header>
        <p>
            My name is Austin Harlow and I am a Software Developer with a passion for learning and creating new things.
            My goal is to create applications that are both functional and interesting.
        </p>
        <p>
            I was born and raised in the Pacific Northwest.
            I have always been interested in creating things whether it be with legos, drawing, or writing.
            In college I chanelled my passion into a History degree and continued to expand on my writing abilities.
            It was through my interests in both creating and writing, as well as through my friends and co-workers at Amazon, that I found out about programming.
            My journey in programming so far has been wonderful, I have learned many new things in such a short time and cannot wait for the next step in my new journey.
        </p>
            
        <p>
            I live in Seattle, WA with my dog, Lucy.
            I have had a lot of fun working with React/Redux, and Rails.
            I am always trying to learn new things and am currently getting into Node.js.
        </p>
    </Segment>
}

export default About;
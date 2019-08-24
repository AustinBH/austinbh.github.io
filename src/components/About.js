import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react';

const About = props => {
    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Icon name='info' circular />
            <Header.Content>About</Header.Content>
        </Header>
        <Header as='h3' content='Background' />
        <p>I was born and raised in the Pacific Northwest.
            I have always been interested in creating things whether it be with legos, drawing, or writing.
            In college I chanelled my passion into a History degree and continued to expand on my writing abilities.
            It was through my interests in both creating and writing, as well as through my friends and co-workers at Amazon, that I found out about programming.
            My journey in programming so far has been wonderful, I have learned many new things in such a short time and cannot wait for the next step in my new journey.
        </p>
        <Header as='h3' dividing content='Skills' />
        <p>Ruby, Ruby on Rails, JavaScript, SQL, Bootstrap, React.js, Semantic UI, React bootstrap, Redux.js, HTML, CSS, AWS S3</p>
        <Header as='h3' dividing content='Education' />
        <p>Flatiron School, Seattle, WA May 2019 - August 2019<br/>
            Full Stack Web Development, Ruby on Rails, and JavaScript on-campus program.<br/><br/>
        University of Redlands, B.A. History, Redlands, CA September 2013 - April 2017<br/>
            Extensive research culminating in semester long Capstone project.<br/>
            Maintained Academic Merit Scholarship all 4 years.</p>
    </Segment>
}

export default About;
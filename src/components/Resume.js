import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import Experience from './ResumeAdditions/Experience';
import Education from './ResumeAdditions/Education';
import TechnicalSkills from './ResumeAdditions/TechnicalSkills';
import Certificates from './ResumeAdditions/Certificates';

const Resume = props => {

    const handleEvent = (ev) => {
        if (ev.type === 'click') {
            props.history.push('/')
        } else if (ev.which === 13) {
            props.history.push('/')
        }
    }

    return <Segment className='section-holder' style={{textAlign: 'left'}}>
        <Button icon='file' content='Downloadable version' color='blue' style={{ color: 'black' }} href='https://learn.co/austin/resume' target='_blank' rel='noopener noreferrer'/>
        <Icon name='close' style={{ float: 'right', cursor: 'pointer' }} onClick={handleEvent} onKeyPress={handleEvent} tabIndex='0' />
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='file pdf' circular size='mini' />
            <Header.Content>Resume</Header.Content>
        </Header>
        <p>Full Stack Software Engineer with a passion for creative work in a fast-paced collaborative work environment. 
        With experience in Ruby on Rails, JavaScript, and React and a background in customer service, I discovered web development through my friends and coworkers at Amazon.
        I grew up hiking all over the American West, and I bring the same tenacity and creativity to every project and assignment that I developed when learning how to live on nothing but what fish I could catch and what I had in my pack.</p>
        <TechnicalSkills/>
        <Certificates />
        <Experience/>
        <Education/>
    </Segment>
}

export default Resume;
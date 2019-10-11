import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import Experience from './ResumeAdditions/Experience';
import Education from './ResumeAdditions/Education';
import TechnicalSkills from './ResumeAdditions/TechnicalSkills';
import Certificates from './ResumeAdditions/Certificates';

const Resume = props => {

    const handleEvent = ev => {
        let resume =  document.getElementById('resume')
        if (ev.type === 'click' || ev.keyCode === 13) {
            if (resume.className === 'resume-pdf') {
                resume.className = 'hidden'
            } else if (resume.className === 'hidden') {
                resume.className = 'resume-pdf'
            }
        }
    }

    return <Segment className='section-holder' style={{textAlign: 'left'}}>
        <Button icon='file' content='Downloadable version' color='blue' style={{ color: 'black' }} onClick={handleEvent} onKeyPress={ev => handleEvent(ev)} tabIndex='0'/>
        <iframe className='hidden' id='resume' title='Resume PDF' src='/Austin-Harlow-Resume.pdf' />
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
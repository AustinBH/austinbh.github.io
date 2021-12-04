import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import Experience from './ResumeAdditions/Experience';
import Education from './ResumeAdditions/Education';
import TechnicalSkills from './ResumeAdditions/TechnicalSkills';
import Certificates from './ResumeAdditions/Certificates';

const Resume = props => {

    // This only handles the desktop version. For mobile pdf view I am using the ternary in the below return statement to render based on the width of the window.
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
        {window.screen.width > 800 ? <Button icon='file' content='Downloadable version' color='blue' style={{ color: 'black' }} onClick={handleEvent} onKeyPress={ev => handleEvent(ev)} tabIndex='0' /> : <Button icon='file' content='Downloadable version' color='blue' style={{ color: 'black' }} href='/Austin-Harlow-Resume.pdf' target='_blank' rel='noopener noreferrer' />}
        <object title='resume-holder' className='hidden' id='resume' data='/Austin-Harlow-Resume.pdf' type='application/pdf' height='20%' width='80%'>
            <iframe title='Resume PDF' src='/Austin-Harlow-Resume.pdf' frameBorder='0' type='application/pdf' />
        </object>
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='file pdf' circular size='mini' />
            <Header.Content>Resume</Header.Content>
        </Header>
        <p>Support Engineer with a passion for learning and solving problems for customers. With experience in Ruby on Rails, JavaScript, and React and a background in customer service, I have recently been focused on the cybersecurity field and am working on several certifications.
        I grew up hiking all over the American West, and I bring the same tenacity and creativity to every project and assignment that I developed when learning how to live on nothing but what fish I could catch and what I had in my pack.</p>
        <TechnicalSkills/>
        <Certificates />
        <Experience/>
        <Education/>
    </Segment>
}

export default Resume;
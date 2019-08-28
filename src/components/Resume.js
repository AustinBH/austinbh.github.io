import React from 'react';
import { Segment, Header, Icon, List, Button } from 'semantic-ui-react';

const Resume = props => {

    const handleClick = () => {
        props.history.push('/')
    }

    return <Segment className='section-holder' style={{textAlign: 'left'}}>
        <Icon name='close' style={{float: 'right', cursor: 'pointer'}} onClick={handleClick}/>
        <a href='https://learn.co/austin/resume' target='_blank' rel='noopener noreferrer'>
            <Button icon='file' content='Downloadable version' color='blue'/>
        </a>
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='file pdf' circular size='mini' />
            <Header.Content>Resume</Header.Content>
        </Header>
        <p>Full stack software developer with a passion for creative work in a fast-paced collaborative work environment. 
        With experience in Ruby on Rails, JavaScript, and React and a background in customer service, I discovered web development through my friends and coworkers at Amazon.
        I grew up hiking all over the American West, and I bring the same tenacity and creativity to every project and assignment that I developed when learning how to live on nothing but what fish I could catch and what I had in my pack.</p>
        <Header as='h3' dividing content='Technical Skills' textAlign='center' />
        Ruby, Ruby on Rails, JavaScript, SQL, Bootstrap, React.js, Semantic UI, React bootstrap, Redux.js, HTML, CSS, AWS S3
        <Header as='h3' dividing content='Experience' textAlign='center' />
        <p><strong>Amazon</strong>, Seattle, WA June 2017 - December 2018</p>
        <em>Seller Support Associate</em>
        <List animated bulleted>
            <List.Item content='Assisted Sellers, Service Providers, and Content Creators with the Selling on Amazon, Amazon Selling Services, and Merch by Amazon programs respectively.' />
            <List.Item content='Designed process improvements for program material which were used by the rest of the Merch by Amazon team.' />
            <List.Item content='Was awarded the Merch by Amazon Associate of the month award 3 times.' />
            <List.Item content='Created and managed a team SharePoint for 9 months as a member of the Merch by Amazon team.' />
        </List>
        <p><strong>Sound Outreach</strong>, Tacoma, WA June 2016 - August 2016</p>
        <em>Intern</em>
        <List animated bulleted>
            <List.Item content='Created an all purpose reference manual for clients and office staff.' />
            <List.Item content='Responsible for client intake, communication, scheduling and referrals to local social service organizations.' />
        </List> 
        <p><strong>Oles, Morrison, Rinker & Baker</strong>, Seattle, WA May 2016</p>
        <em>Intern/Assistant</em>
        <List animated bulleted>
            <List.Item content='Coordinated internal office move for local law firm with multiple offices in 3 states and more than 50 employees.' />
            <List.Item content='Organized office supply room, central filing, and relocation of IT equipment.' />
        </List> 
        <Header as='h3' dividing content='Education' textAlign='center' />
        <p><strong>Flatiron School</strong>, Seattle, WA May 2019 - August 2019</p>
        <List animated bulleted>
            <List.Item content='Full Stack Web Development, Ruby on Rails, and JavaScript on-campus program.' />
        </List>   
        <p><strong>University of Redlands</strong>, <em>B.A. History</em>, Redlands, CA September 2013 - April 2017</p>
        <List animated bulleted>
            <List.Item content='Extensive research culminating in semester long Capstone project.' />
            <List.Item content='Maintained Academic Merit Scholarship all 4 years.' />
        </List>
    </Segment>
}

export default Resume;
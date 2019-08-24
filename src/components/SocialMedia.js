import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';

const SocialMedia = props => {
    return <>
        <Segment className='section-holder' textAlign='center'>
            <Header as='h3' dividing icon textAlign='center'>
                <Icon name='phone' circular />
                <Header.Content>Connect</Header.Content>
            </Header>
            <a href='https://github.com/AustinBH' target='_blank' rel='noopener noreferrer'>
                <Button className='contact-button' icon='github' color='black' content='Github' />
            </a>
            <a href='https://www.linkedin.com/in/austin-harlow/' target='_blank' rel='noopener noreferrer'>
                <Button className='contact-button' icon='linkedin' color='linkedin' content='LinkedIn' />
            </a>
            <a href='https://dev.to/austinbh' target='_blank' rel='noopener noreferrer'>
                <Button className='contact-button' icon='book' color='green' content='Blog' />
            </a>
            <p>Email: <a href='mailto:harlowaustin2@gmail.com'>harlowaustin2@gmail.com</a></p>
        </Segment>
        <div/>
    </>
}

export default SocialMedia;
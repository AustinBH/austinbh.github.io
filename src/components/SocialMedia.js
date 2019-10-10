import React from 'react';
import { Button } from 'semantic-ui-react';

const SocialMedia = props => {
    return <>
        <Button className='project-button' icon='github' color='black' content='Github' href='https://github.com/AustinBH' target='_blank' rel='noopener noreferrer'/>
        <Button className='project-button' icon='linkedin' color='linkedin' content='LinkedIn' style={{ color: 'black' }} href='https://www.linkedin.com/in/austin-harlow/' target='_blank' rel='noopener noreferrer'/>
        <Button className='project-button' icon='telegram plane' color='vk' content='Email' href='mailto:harlowaustin2@gmail.com'/>
    </>
}

export default SocialMedia;
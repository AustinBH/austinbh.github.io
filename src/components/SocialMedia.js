import React from 'react';
import { Button } from 'semantic-ui-react';

const SocialMedia = props => {
    return <>
            <a
                href='https://docs.google.com/document/d/1ZhfCdV35E5LYpiLtYayQuO2wdbALZLm-UZ7V_AdJVgI/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Button className='contact-button' icon='file pdf' color='blue' content='Resume'/>
            </a>
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
    </>
}

export default SocialMedia;
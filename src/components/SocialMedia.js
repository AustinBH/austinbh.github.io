import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

const SocialMedia = props => {
    return <Grid columns={1} widths='equal'>
        <Grid.Row>
            <Grid.Column width={16}>
                <a href='https://github.com/AustinBH' target='_blank' rel='noopener noreferrer'>
                    <Button compact className='contact-button' icon='github' color='black' content='Github' />
                </a>
                <a href='https://www.linkedin.com/in/austin-harlow/' target='_blank' rel='noopener noreferrer'>
                    <Button compact className='contact-button' icon='linkedin' color='linkedin' content='LinkedIn' />
                </a>
                <a href='https://dev.to/austinbh' target='_blank' rel='noopener noreferrer'>
                    <Button compact className='contact-button' icon='book' color='green' content='Blog' />
                </a>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column textAlign='center' width={16}>
                <p>Email: <a href='mailto:harlowaustin2@gmail.com'>harlowaustin2@gmail.com</a></p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

export default SocialMedia;
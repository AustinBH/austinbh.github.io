import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

const SocialMedia = props => {
    return <Grid columns={1} widths='equal' verticalAlign='middle'>
        <Grid.Row>
            <Grid.Column width={16}>
                <a href='https://github.com/AustinBH' target='_blank' rel='noopener noreferrer'>
                    <Button className='contact-button' icon='github' color='black' content='Github' />
                </a>
                <a href='https://www.linkedin.com/in/austin-harlow/' target='_blank' rel='noopener noreferrer'>
                    <Button className='contact-button' icon='linkedin' color='linkedin' content='LinkedIn' />
                </a>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                <a href='https://dev.to/austinbh' target='_blank' rel='noopener noreferrer'>
                    <Button className='contact-button' icon='book' color='green' content='Blog' />
                </a>
                <a href='mailto:harlowaustin2@gmail.com'>
                    <Button className='contact-button' icon='telegram plane' color='blue' content='Email'/>
                </a>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

export default SocialMedia;
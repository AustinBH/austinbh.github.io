import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

const SocialMedia = props => {
    return <Grid columns={1} widths='equal' verticalAlign='middle'>
        <Grid.Row>
            <Grid.Column width={16}>
                <Button className='contact-button' icon='github' color='black' content='Github' href='https://github.com/AustinBH' target='_blank' rel='noopener noreferrer'/>
                <Button className='contact-button' icon='linkedin' color='linkedin' content='LinkedIn' style={{ color: 'black' }} href='https://www.linkedin.com/in/austin-harlow/' target='_blank' rel='noopener noreferrer'/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                <Button className='contact-button' icon='telegram plane' color='vk' content='Email' href='mailto:harlowaustin2@gmail.com'/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

export default SocialMedia;
import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';

const FinalFM = props => {
    return <>
        <Grid.Row className='project-info-row'>
            <Grid.Column>
                <iframe title='The Final FM Demo' className='project-image' src="https://www.youtube.com/embed/8FJRmSAH4UI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button compact color='olive' icon='music' content='Live Site' href='https://the-final-fm.herokuapp.com' target='_blank' rel='noopener noreferrer' />
            </Grid.Column>
            <Grid.Column className='project-info'>
                <p><em>A song and concert search app that allows users to save their favorite songs.</em></p>
                <p>Technologies Used:</p>
                <List>
                    <List.Item icon='ticket' content='Ticketmaster API' />
                    <List.Item icon='react' content='React' />
                    <List.Item icon='gem' content='Ruby on Rails' />
                    <List.Item icon='bold' content='React Bootstrap' />
                    <List.Item icon='html5' content='HTML5' />
                    <List.Item icon='css3' content='CSS3' />
                </List>
                <Button compact className='project-button' color='black' icon='github' content='Frontend' href='https://github.com/AustinBH/the-final-fm-frontend' target='_blank' rel='noopener noreferrer' />
                <Button compact className='project-button' color='black' icon='github' content='Backend' href='https://github.com/AustinBH/the-final-fm-backend' target='_blank' rel='noopener noreferrer' />
            </Grid.Column>
            <Grid.Column>
                <p>Most difficult ask:</p>
                <p>The Final FM</p>
            </Grid.Column>
        </Grid.Row>
    </>
}

export default FinalFM;
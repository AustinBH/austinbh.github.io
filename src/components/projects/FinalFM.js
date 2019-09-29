import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';

const FinalFM = props => {
    return <>
        <Grid.Row className='project-info-row'>
            <Grid.Column>
                <iframe title='The Final FM Demo' className='project-image' src="https://www.youtube.com/embed/IX76ualotMY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button className='site-link' compact color='olive' icon='music' content='Live Site' href='https://the-final-fm.herokuapp.com' target='_blank' rel='noopener noreferrer' />
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
                <p>For this project, my partner and I wanted to incorporate an api call from our backend to return event data. Having previously used APIs to seed my databases, I knew how to interact with them through rails but I had not incorporated an API call into a controller action before. I was able to create a request using the restclient gem and then parse that request using the json gem and used the resulting data to return filtered event data to the rails API.</p>
            </Grid.Column>
        </Grid.Row>
    </>
}

export default FinalFM;
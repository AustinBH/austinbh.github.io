import React from 'react';
import { Grid, Button, List } from 'semantic-ui-react';

const MyTrails = props => {
    return <>
        <Grid.Row className='project-info-row'>
            <Grid.Column>
                <iframe title='My Trails Demo' className='project-image' src="https://www.youtube.com/embed/P2BzlqXCFZU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button className='site-link' compact color='olive' icon='map' content='Live Site' href='https://my-trails.info' target='_blank' rel='noopener noreferrer' />
            </Grid.Column>
            <Grid.Column className='project-info'>
                <p><em>A trail finding app that uses the Google Maps API to display maps with trail info.</em></p>
                <p>Technologies Used:</p>
                <List>
                    <List.Item icon='google' content='Google Maps API' />
                    <List.Item icon='aws' content='AWS S3' />
                    <List.Item icon='map marker alternate' content='Geolocation API' />
                    <List.Item icon='registered' content='Redux' />
                    <List.Item icon='react' content='React' />
                    <List.Item icon='gem' content='Ruby on Rails' />
                    <List.Item icon='speakap' content='Semantic UI React' />
                    <List.Item icon='html5' content='HTML5' />
                    <List.Item icon='css3' content='CSS3' />
                </List>
                <Button compact className='project-button' color='black' icon='github' content='Frontend' href='https://github.com/AustinBH/my-trails-frontend' target='_blank' rel='noopener noreferrer' />
                <Button compact className='project-button' color='black' icon='github' content='Backend' href='https://github.com/AustinBH/my-trails-backend' target='_blank' rel='noopener noreferrer' />
            </Grid.Column>
            <Grid.Column>
                <p>Most difficult ask:</p>
                <p>From the start I wanted to incorporate image hosting for this project but I had no previous experience using any data storage or hosting services. Learning how to use AWS' S3 feature and incorporating it with a Rails backend was the most difficult part as I wanted to make sure that deleting the image in the backend also removes it from the S3 bucket.</p>
            </Grid.Column>
        </Grid.Row>
    </>
}

export default MyTrails;
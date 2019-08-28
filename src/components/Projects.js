import React from 'react';
import { Image, Header, Grid, Icon, Segment, Button, List } from 'semantic-ui-react';
import finalFMSample from '../images/finalFMSample.png'
import myTrailsSample from '../images/myTrailsSample.png'
import pokemonTeamsSample from '../images/pokemonTeamsSample.png'

const Projects = props => {

    const handleClick = () => {
        props.history.push('/')
    }

    return <Segment className='section-holder'>
        <Icon name='close' style={{ float: 'right', cursor: 'pointer' }} onClick={handleClick} />
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='code' circular size='mini'/>
            <Header.Content>Projects</Header.Content>
        </Header>
        <Grid columns={3} textAlign='center' stackable>
            <Grid.Row>
                <Grid.Column>
                    <Header as='h3' content='My Trails' />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3' content='The Final FM' />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3' content='Pokemon Teams' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <a href='https://my-trails.info' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={myTrailsSample} size='medium' alt='My Trails' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://the-final-fm.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={finalFMSample} size='medium' alt='Final FM' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://austinbh.github.io/Pokedex-Teams/' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={pokemonTeamsSample} size='medium' alt='Pokemon Teams' />
                    </a>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className='project-info'>
                    <p><em>A trail finding app that uses the Google Maps API to display maps with trail info.</em></p>
                    <p>Technologies Used:</p>
                    <List>
                        <List.Item icon='google' content='Google Maps API' />
                        <List.Item icon='aws' content='AWS S3' />
                        <List.Item icon='map marker alternate' content='Geolocation API' />
                        <List.Item icon='registered' content='Redux' />
                        <List.Item icon='react' content='React' />
                        <List.Item icon='speakap' content='Semantic UI React' />
                        <List.Item icon='css3' content='CSS3' />
                        <List.Item icon='html5' content='HTML5' />
                    </List>
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
                </Grid.Column>
                <Grid.Column className='project-info'>
                    <p><em>A Pokedex app for fans of Pokemon to create teams using their favorite Pokemon.</em></p>
                    <p>Technologies Used:</p>
                    <List>
                        <List.Item icon='js' content='Vanilla JavaScript' />
                        <List.Item icon='gem' content='Ruby on Rails' />
                        <List.Item icon='html5' content='HTML5' />
                        <List.Item icon='css3' content='CSS3' />
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/my-trails-frontend' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/my-trails-backend' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/the-final-fm-frontend' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/the-final-fm-backend' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/pokedex-teams' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/pokedex-backend' target='_blank' rel='noopener noreferrer'>
                        <Button compact className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
}

export default Projects;
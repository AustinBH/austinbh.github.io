import React from 'react';
import { Image, Header, Grid, Icon, Segment, Button } from 'semantic-ui-react';
import finalFMSample from '../images/finalFMSample.png'
import myTrailsSample from '../images/myTrailsSample.png'
import pokemonTeamsSample from '../images/pokemonTeamsSample.png'

const Projects = props => {
    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Icon name='sitemap' circular />
            <Header.Content>Projects</Header.Content>
        </Header>
        <Grid columns={3} textAlign='center'>
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
                    <a href='https://my-trails.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={myTrailsSample} size='medium' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://the-final-fm.herokuapp.com' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={finalFMSample} size='medium' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://austinbh.github.io/Pokedex-Teams/' target='_blank' rel='noopener noreferrer'>
                        <Image className='project-image' src={pokemonTeamsSample} size='medium' />
                    </a>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/my-trails-frontend' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/my-trails-backend' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/the-final-fm-frontend' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/the-final-fm-backend' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
                <Grid.Column>
                    <a href='https://github.com/AustinBH/pokedex-teams' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Frontend' />
                    </a>
                    <a href='https://github.com/AustinBH/pokedex-backend' target='_blank' rel='noopener noreferrer'>
                        <Button className='project-button' color='black' icon='github' content='Backend' />
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
}

export default Projects;
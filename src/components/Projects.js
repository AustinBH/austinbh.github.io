import React from 'react';
import { Header, Grid, Icon, Segment } from 'semantic-ui-react';
import MyTrails from './projects/MyTrails';
import FinalFM from './projects/FinalFM';
import PokemonTeams from './projects/PokemonTeams';

const Projects = props => {

    return <Segment className='section-holder'>
        <Header as='h3' icon textAlign='center'>
            <Icon name='lab' circular size='mini' />
            <Header.Content>Projects</Header.Content>
        </Header>
        <Grid columns={3} textAlign='center' stackable celled='internally'>
            <Header as='h5' icon textAlign='center'>
                <Icon name='map' circular size='tiny' />
                <Header.Content>My Trails</Header.Content>
            </Header>
            <MyTrails/>
            <Header as='h5' icon textAlign='center'>
                <Icon name='music' circular size='tiny' />
                <Header.Content>The Final FM</Header.Content>
            </Header>
            <FinalFM/>
            <Header as='h5' icon textAlign='center'>
                <Icon name='game' circular size='tiny' />
                <Header.Content>Pokemon Teams</Header.Content>
            </Header>
            <PokemonTeams/>
        </Grid>
    </Segment>
}

export default Projects;
import React from 'react';
import {Header, Grid, Icon, Segment } from 'semantic-ui-react';
import MyTrails from './projects/MyTrails';
import FinalFM from './projects/FinalFM';
import PokemonTeams from './projects/PokemonTeams';

const Projects = props => {

    const handleEvent = (ev) => {
        if (ev.type === 'click') {
            props.history.push('/')
        } else if (ev.which === 13) {
            props.history.push('/')
        }
    }

    return <Segment className='section-holder'>
        <Icon name='close' style={{ float: 'right', cursor: 'pointer' }} onClick={handleEvent} onKeyPress={handleEvent} tabIndex='0' />
        <Header as='h3' dividing icon textAlign='center'>
            <Icon name='code' circular size='mini'/>
            <Header.Content>Projects</Header.Content>
        </Header>
        <Grid columns={3} textAlign='center' stackable celled='internally'>
            <Header as='h3' icon textAlign='center'>
                <Icon name='map' circular size='mini' />
                <Header.Content>My Trails</Header.Content>
            </Header>
            <MyTrails/>
            <Header as='h3' icon textAlign='center'>
                <Icon name='music' circular size='mini' />
                <Header.Content>The Final FM</Header.Content>
            </Header>
            <FinalFM/>
            <Header as='h3' icon textAlign='center'>
                <Icon name='game' circular size='mini' />
                <Header.Content>Pokemon Teams</Header.Content>
            </Header>
            <PokemonTeams/>
        </Grid>
    </Segment>
}

export default Projects;
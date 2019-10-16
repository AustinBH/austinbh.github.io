import React from 'react';
import { Header, Grid, Icon, Segment } from 'semantic-ui-react';
import MyTrails from './projects/MyTrails';
import FinalFM from './projects/FinalFM';
import PokemonTeams from './projects/PokemonTeams';

const Projects = props => {

    const handleEvent = ev => {
        let element;
        // Adding if statement for if a user clicks on the icon rather than the button
        if (ev.target.name) {
            element = document.getElementById(ev.target.name)
        } else {
            element = document.getElementById(ev.target.parentNode.name)
        }
        if (ev.type === 'click' || ev.keyCode === 13) {
            if (element.className === 'project-preview') {
                element.className = 'hidden'
            } else if (element.className === 'hidden') {
                element.className = 'project-preview'
            }
        }
    }

    return <Segment className='section-holder'>
        <Header as='h3' icon textAlign='center'>
            <Icon name='lab' circular size='mini' />
            <Header.Content>Projects</Header.Content>
        </Header>
        <p>All of these applications can be accessed with the username: 'Test' and if necessary, the password: '123'.</p>
        <Grid columns={3} textAlign='center' celled='internally' stackable>
            <Header as='h5' icon textAlign='center'>
                <Icon name='map' circular size='tiny' />
                <Header.Content>My Trails</Header.Content>
            </Header>
            <MyTrails handleEvent={handleEvent}/>
            <iframe title='My Trails App' id='trails' className='hidden' src="https://my-trails.info" frameBorder="0" allow='geolocation' allowFullScreen></iframe>
            <Header as='h5' icon textAlign='center'>
                <Icon name='music' circular size='tiny' />
                <Header.Content>The Final FM</Header.Content>
            </Header>
            <FinalFM handleEvent={handleEvent}/>
            <iframe title='The Final FM App' id='fm' className='hidden' src="https://the-final-fm.herokuapp.com" frameBorder="0" allowFullScreen></iframe>
            <Header as='h5' icon textAlign='center'>
                <Icon name='game' circular size='tiny' />
                <Header.Content>Pokemon Teams</Header.Content>
            </Header>
            <PokemonTeams handleEvent={handleEvent}/>
            <iframe title='Pokemon Teams App' id='pokemon' className='hidden' src="https://austinbh.github.io/Pokedex-Teams/" frameBorder="0" allowFullScreen></iframe>
        </Grid>
    </Segment>
}

export default Projects;
import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';

const PokemonTeams = props => {
    return <>
        <Grid.Row className='project-info-row'>
            <Grid.Column>
                <iframe title='Pokemon Teams Demo' className='project-image' src="https://www.youtube.com/embed/5fmVvPZxef4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button className='site-link' compact color='olive' icon='gamepad' content='Live Site' href='https://austinbh.github.io/Pokedex-Teams/' target='_blank' rel='noopener noreferrer' />
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
                <Button compact className='project-button' color='black' icon='github' content='Frontend' href='https://github.com/AustinBH/pokedex-teams' target='_blank' rel='noopener noreferrer' />
                <Button compact className='project-button' color='black' icon='github' content='Backend' href='https://github.com/AustinBH/pokedex-backend' target='_blank' rel='noopener noreferrer' />
            </Grid.Column>
            <Grid.Column>
                <p>Most difficult ask:</p>
                <p>With this project, we were asked to build a frontend using exclusively Vanilla JavaScript. This made it more time consuming to create an application than some of the other projects that I worked on before or since.</p>
            </Grid.Column>
        </Grid.Row>
    </>
}

export default PokemonTeams;
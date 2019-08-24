import React from 'react';
import headshot from './images/headshot.JPG'
import finalFMSample from './images/finalFMSample.png'
import myTrailsSample from './images/myTrailsSample.png'
import pokemonTeamsSample from './images/pokemonTeamsSample.png'
import './App.css';
import { Image, Header, Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App-header">
      <Header as='h1' dividing content='Austin Harlow' />
        <p>Full Stack Developer</p>
      <Header as='h1' dividing content='Projects' />
      <Grid columns={3} divided>
        <Grid.Row>
          <a href='https://my-trails.herokuapp.com' target='_blank' rel='noopener noreferrer'>
            <Grid.Column>
              <Image className='project-image' src={myTrailsSample} size='medium' />
            </Grid.Column>
          </a>
          <a href='https://the-final-fm.herokuapp.com' target='_blank' rel='noopener noreferrer'>
            <Grid.Column>
              <Image className='project-image' src={finalFMSample} size='medium' />
            </Grid.Column>
          </a>
          <a href='https://austinbh.github.io/Pokedex-Teams/' target='_blank' rel='noopener noreferrer'>
            <Grid.Column>
              <Image className='project-image' src={pokemonTeamsSample} size='medium' />
            </Grid.Column>
          </a>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;

import React from 'react'
import { Header, Grid, Image } from 'semantic-ui-react';
import Bootstrap from '../../images/skills/Bootstrap_logo.svg'
import Ruby from '../../images/skills/Ruby_logo.svg'
import Rails from '../../images/skills/Ruby_on_Rails_logo.svg'
import HTML from '../../images/skills/HTML5_logo_and_wordmark.svg'
import CSS from '../../images/skills/CSS3_logo_and_wordmark.svg'
import JS from '../../images/skills/Unofficial_JavaScript_logo_2.svg'
import ReactLogo from '../../logo.svg'
import Redux from '../../images/skills/Redux_logo.svg'
import Postgres from '../../images/skills/Postgresql_elephant.svg'

const TechnicalSkills = props => {
    return <>
        <Header as='h3' dividing content='Technical Skills' textAlign='center' />
        <Grid columns={5} celled='internally' textAlign='center' stackable>
            <Grid.Row>
                <Grid.Column>
                    <Image src={Ruby} alt='Ruby logo' className='skills-image' centered />
                    Ruby
                </Grid.Column>
                <Grid.Column>
                    <Image src={Rails} alt='Ruby on Rails logo' className='skills-image' centered/>
                    Ruby on Rails
                </Grid.Column>
                <Grid.Column>
                    <Image src={HTML} alt='HTML5 logo' className='skills-image' centered/>
                    HTML5
                </Grid.Column>
                <Grid.Column>
                    <Image src={CSS} alt='CSS3 logo' className='skills-image' centered/>
                    CSS3
                </Grid.Column>
                <Grid.Column>
                    <Image src={JS} alt='JavaScript logo' className='skills-image' centered/>
                    JavaScript
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Image src={ReactLogo} alt='React logo' className='skills-image' centered/>
                    React
                </Grid.Column>
                <Grid.Column>
                    <Image src={Redux} alt='Redux logo' className='skills-image' centered/>
                    Redux
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/logo.png' alt='Semantic UI logo' className='skills-image' centered/>
                    Semantic UI
                </Grid.Column>
                <Grid.Column>
                    <Image src={Bootstrap} alt='Bootstrap logo' className='skills-image' centered/>
                    Bootstrap
                </Grid.Column>
                <Grid.Column>
                    <Image src={Postgres} alt='Postgresql logo' className='skills-image' centered/>
                    Postgresql
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
}

export default TechnicalSkills;
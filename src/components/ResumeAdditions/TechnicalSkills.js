import React from 'react'
import { Divider, Grid, Image, Header, Icon } from 'semantic-ui-react';
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
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='computer' />
                Technical Skills
            </Header>
        </Divider>
        <Grid columns={5} celled='internally' textAlign='center'>
            <Grid.Row>
                <Grid.Column>
                    <Image src={Ruby} alt='Ruby logo' className='skills-image' centered />
                    <p className='skills-text'>Ruby</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Rails} alt='Ruby on Rails logo' className='skills-image' centered/>
                    <p className='skills-text'>Ruby on Rails</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={HTML} alt='HTML5 logo' className='skills-image' centered/>
                    <p className='skills-text'>HTML5</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={CSS} alt='CSS3 logo' className='skills-image' centered/>
                    <p className='skills-text'>CSS3</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={JS} alt='JavaScript logo' className='skills-image' centered/>
                    <p className='skills-text'>JavaScript</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Image src={ReactLogo} alt='React logo' className='skills-image' centered/>
                    <p className='skills-text'>React</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Redux} alt='Redux logo' className='skills-image' centered/>
                    <p className='skills-text'>Redux</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/logo.png' alt='Semantic UI logo' className='skills-image' centered/>
                    <p className='skills-text'>Semantic UI</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Bootstrap} alt='Bootstrap logo' className='skills-image' centered/>
                    <p className='skills-text'>Bootstrap</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={Postgres} alt='Postgresql logo' className='skills-image' centered/>
                    <p className='skills-text'>Postgresql</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
}

export default TechnicalSkills;
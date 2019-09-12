import React from 'react'
import { Divider, Grid, Image, Header, Icon, Popup } from 'semantic-ui-react';
import Bootstrap from '../../images/skills/Bootstrap_logo.svg'
import Ruby from '../../images/skills/Ruby_logo.svg'
import Rails from '../../images/skills/Ruby_on_Rails_logo.svg'
import HTML from '../../images/skills/HTML5_logo_and_wordmark.svg'
import CSS from '../../images/skills/CSS3_logo_and_wordmark.svg'
import JS from '../../images/skills/Unofficial_JavaScript_logo_2.svg'
import ReactLogo from '../../logo.svg'
import Redux from '../../images/skills/Redux_logo.svg'
import Postgres from '../../images/skills/Postgresql_elephant.svg'
import Python from '../../images/skills/Python_logo.svg'

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
                    <Popup
                        inverted
                        size='tiny'
                        position='top right'
                        content='Ruby'
                        on='click'
                        pinned
                        trigger={<Image src={Ruby} alt='Ruby logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='top right'
                        content='Ruby on Rails'
                        on='click'
                        pinned
                        trigger={<Image src={Rails} alt='Ruby on Rails logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='top left'
                        content='HTML5'
                        on='click'
                        pinned
                        trigger={<Image src={HTML} alt='HTML5 logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='top left'
                        content='CSS3'
                        on='click'
                        pinned
                        trigger={<Image src={CSS} alt='CSS3 logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom right'
                        content='JavaScript'
                        on='click'
                        pinned
                        trigger={<Image src={JS} alt='JavaScript logo' className='skills-image' centered />}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom right'
                        content='React'
                        on='click'
                        pinned
                        trigger={<Image src={ReactLogo} alt='React logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom left'
                        content='Redux'
                        on='click'
                        pinned
                        trigger={<Image src={Redux} alt='Redux logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom left'
                        content='Semantic UI'
                        on='click'
                        pinned
                        trigger={<Image src='https://react.semantic-ui.com/logo.png' alt='Semantic UI logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom right'
                        content='Bootstrap'
                        on='click'
                        pinned
                        trigger={<Image src={Bootstrap} alt='Bootstrap logo' className='skills-image' centered />}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom center'
                        content='PostgreSQL'
                        on='click'
                        pinned
                        trigger={<Image src={Postgres} alt='Postgresql logo' className='skills-image' centered />}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='keyboard' />
                Learning...
            </Header>
        </Divider>
        <Grid columns={4} celled='internally' textAlign='center'>
            <Grid.Row>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='bottom left'
                        content='Python'
                        on='click'
                        pinned
                        trigger={<Image src={Python} alt='Python logo' className='skills-image' centered />}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
}

export default TechnicalSkills;
import React, { useState } from 'react'
import { Divider, Grid, Image, Header, Icon, Popup, Message } from 'semantic-ui-react';
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

    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }

    return <div style={{textAlign: 'center'}}>
        <Divider horizontal onClick={handleClick}>
            <Header as='h3' style={{cursor: 'pointer'}}>
                <Icon name='computer' />
                Technical Skills
            </Header>
        </Divider>
        {show ? 
            <Message compact>
                <Message.Header>Click the images for more info</Message.Header>
            </Message>
        :
            null
        }
        <Grid columns={5} celled='internally' textAlign='center'>
            <Grid.Row>
                <Grid.Column>
                    <Popup
                        inverted
                        size='tiny'
                        position='top center'
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
                        position='top center'
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
                        position='top center'
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
                        position='top center'
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
                        position='top center'
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
                        position='bottom center'
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
                        position='bottom center'
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
                        position='bottom center'
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
                        position='bottom center'
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
                        position='top center'
                        content='Python'
                        on='click'
                        pinned
                        trigger={<Image src={Python} alt='Python logo' className='skills-image' centered />}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
}

export default TechnicalSkills;
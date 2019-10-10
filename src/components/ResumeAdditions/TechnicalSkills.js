import React, { useState, useEffect } from 'react'
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
import Node from '../../images/skills/Node_js.svg'

const skills = [
    { lang: 'Ruby', image: Ruby, alt: 'Ruby logo' },
    { lang: 'Ruby on Rails', image: Rails, alt: 'Ruby on Rails logo' },
    { lang: 'HTML5', image: HTML, alt: 'HTML5 logo' },
    { lang: 'CSS3', image: CSS, alt: 'CSS3 logo' },
    { lang: 'JavaScript', image: JS, alt: 'JavaScript logo' },
    { lang: 'React', image: ReactLogo, alt: 'React logo' },
    { lang: 'Redux', image: Redux, alt: 'Redux logo' },
    { lang: 'Semantic UI', image: 'https://react.semantic-ui.com/logo.png', alt: 'Semantic UI logo' },
    { lang: 'Bootstrap', image: Bootstrap, alt: 'Bootstrap logo' },
    { lang: 'PostgreSQL', image: Postgres, alt: 'PostreSQL logo' }
]
const learning = [
    {lang: 'Python', image: Python, alt: 'Python logo'},
    {lang: 'Node.js', image: Node, alt: 'Node.js logo'}
]

const TechnicalSkills = props => {

    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }

    useEffect(() => {
        let timer = setTimeout(() => setShow(false), 4000);
        return () => clearTimeout(timer)
    })

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
        <Grid columns={10} celled='internally' textAlign='center' stackable>
                {skills.map((skill, index) => {
                    return <Grid.Column key={index}>
                        <Popup
                            inverted
                            size='tiny'
                            position='bottom center'
                            content={skill.lang}
                            on='click'
                            pinned
                            trigger={<Image src={skill.image} alt={skill.alt} className='skills-image' centered />}
                        />
                    </Grid.Column>
                })}
        </Grid>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='keyboard' />
                Learning...
            </Header>
        </Divider>
        <Grid columns={10} celled='internally' textAlign='center' stackable>
            <Grid.Row>
                {learning.map((skill, index) => {
                    return <Grid.Column key={index+10}>
                        <Popup
                            inverted
                            size='tiny'
                            position='top center'
                            content={skill.lang}
                            on='click'
                            pinned
                            trigger={<Image src={skill.image} alt={skill.alt} className='skills-image' centered />}
                        />
                    </Grid.Column>
                })}
            </Grid.Row>
        </Grid>
    </div>
}

export default TechnicalSkills;
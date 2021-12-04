import React from 'react'
import { Header, Grid, List, Image, Divider, Icon } from 'semantic-ui-react';

const Education = props => {
    return <>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='graduation cap' />
                Education
            </Header>
        </Divider>
        <Grid columns={1} celled='internally'>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Image src='https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png' alt='Flatiron logo' size='tiny' centered/>
                    <p><strong>Flatiron School</strong>, Seattle, WA May 2019 - August 2019</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <List animated bulleted>
                        <List.Item content='Full Stack Web Development, Ruby on Rails, and JavaScript on-campus program.' />
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Image id='1' src='https://sites.redlands.edu/contentassets/ba075ec251804ce2aaed4560924aba88/redlands_style3_1815-web-300ppi.jpg' alt='University of Redlands logo' size='tiny' centered />
                    <p><strong>University of Redlands</strong>, Redlands, CA September 2013 - April 2017</p>
                    <em>B.A. History</em>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <List animated bulleted>
                        <List.Item content='Extensive research culminating in semester long Capstone project.' />
                        <List.Item content='Maintained Academic Merit Scholarship all 4 years.' />
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
}

export default Education;
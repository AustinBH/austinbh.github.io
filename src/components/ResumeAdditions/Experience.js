import React from 'react'
import { Header, Grid, Image, List, Divider, Icon } from 'semantic-ui-react';

const Experience = props => {
    return <>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='briefcase' />
                Experience
            </Header>
        </Divider>
            <Grid columns={1} celled='internally'>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Image src='http://www.amanida.com/wp-content/uploads/2018/04/amazon-logo-a-smile-black.png' alt='Amazon logo' size='tiny' centered />
                        <p><strong>Amazon</strong>, Seattle, WA June 2017 - December 2018</p>
                        <em>Seller Support Associate</em>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <List animated bulleted>
                            <List.Item content='Assisted Sellers, Service Providers, and Content Creators with the Selling on Amazon, Amazon Selling Services, and Merch by Amazon programs respectively.' />
                            <List.Item content='Designed process improvements for program material which were used by the rest of the Merch by Amazon team.' />
                            <List.Item content='Was awarded the Merch by Amazon Associate of the month award 3 times.' />
                            <List.Item content='Created and managed a team SharePoint for 9 months as a member of the Merch by Amazon team.' />
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Image src='https://pbs.twimg.com/profile_images/581164941995945984/bmlTRLp_.jpg' alt='Sound Outreach logo' size='tiny' centered />
                        <p><strong>Sound Outreach</strong>, Tacoma, WA June 2016 - August 2016</p>
                        <em>Intern</em>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <List animated bulleted>
                            <List.Item content='Created an all purpose reference manual for clients and office staff.' />
                            <List.Item content='Responsible for client intake, communication, scheduling and referrals to local social service organizations.' />
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Image src='https://media.licdn.com/dms/image/C560BAQFJEww_rYM20g/company-logo_200_200/0?e=2159024400&v=beta&t=y8EOtO4DcUWo3ovzwNMHTSceh24EQfE7yNi9UMJKuW4' alt='Oles Morrison logo' size='tiny' centered />
                        <p><strong>Oles, Morrison, Rinker & Baker</strong>, Seattle, WA May 2016</p>
                        <em>Intern/Assistant</em>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <List animated bulleted>
                            <List.Item content='Coordinated internal office move for local law firm with multiple offices in 3 states and more than 50 employees.' />
                            <List.Item content='Organized office supply room, central filing, and relocation of IT equipment.' />
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
}

export default Experience;
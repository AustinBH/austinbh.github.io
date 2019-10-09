import React from 'react';
import { Button, Divider, Header, Icon, Grid } from 'semantic-ui-react';

const Certificates = props => {
    return <>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='certificate' />
                Certificates
            </Header>
        </Divider>
        <Grid columns='1'>
            <Grid.Row>
                <Grid.Column width={16} style={{textAlign: 'center'}}>
                    <Button className='project-button' icon='python' color='blue' content='Python 3 Udemy' href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-XPRIZEOM.pdf' target='_blank' rel='noopener noreferrer' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
}

export default Certificates;
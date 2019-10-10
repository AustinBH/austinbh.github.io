import React from 'react';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';

const Certificates = props => {
    return <div style={{textAlign: 'center'}}>
        <Divider horizontal>
            <Header as='h3'>
                <Icon name='certificate' />
                Certificates
            </Header>
        </Divider>
        <Button className='project-button' icon='python' color='blue' content='Python 3 Udemy' href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-XPRIZEOM.pdf' target='_blank' rel='noopener noreferrer' />
    </div>
}

export default Certificates;
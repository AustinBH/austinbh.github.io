import React from 'react'
import { Icon, Grid } from 'semantic-ui-react';

const Signature = props => {
    return <footer>
        <Grid columns={1} className={props.class} celled='internally'>
            <Grid.Row>
                <Grid.Column>
                    <p><Icon name='copyright outline' /> Austin Harlow</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </footer>
}

export default Signature;
import React from 'react'
import { Icon } from 'semantic-ui-react';

const Signature = props => {
    return <footer>
        <div className={props.class}>
            <p><Icon name='copyright outline' /> Austin Harlow</p>
        </div>
    </footer>
}

export default Signature;
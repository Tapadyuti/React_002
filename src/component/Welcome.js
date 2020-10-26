import React from 'react';

const Welcome  = props => {
    console.log(props);
    return (<div>
            <h2>Welcome : {props.firstName} {props.lastName} </h2>
            {props.children}
        </div>)
}

export default Welcome;
import React from 'react'

function ChildComponent(props) {

    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Greet Parnt</button> {/* fat arrow is used to pass argument */}
        </div>
    )
}

export default ChildComponent;
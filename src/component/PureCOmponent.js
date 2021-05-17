import React, { PureComponent } from 'react'


/* A Pure component implements shouldComponentUpdate() with a shallow prop and state comparision. */

class PureCOmponent extends PureComponent {
    render() {
        console.log("Pure Component Reder")
        return (
            <div>
                Pure Component :  {this.props.name}<br></br>
                A Pure component implements shouldComponentUpdate() with a shallow prop and state comparision.
                <ul>
                    <li>Shallow Comparision of prevState with currentState</li>
                    <li>Shallow Comparision of prevProps with currentProps</li>
                </ul>
                if there is any diference in any 2 points then it will re-render

            </div>
        )
    }
}

export default PureCOmponent

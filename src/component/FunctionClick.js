import React from 'react'

function FunctionClick() {
    function clickHandeler(){
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandeler}>Click from function</button>
        </div>
    )
}

export default FunctionClick;
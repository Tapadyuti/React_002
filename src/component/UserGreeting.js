/*  CONDITIONAL RENDERING
    4 WAYS TO ACHIEVE THIS:
    1) if/else
    2) Element Variables
    3) Ternary Operator
    4) Short circuit Operator
 */


import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogedIn:true
        }
    }
    
    render() {
        /* if else is not allowed inside the jsx */
        /* ----------Method 1------------
        
        if(this.state.isLogedIn){ 
            return(
                <div>Welcome Tapadyuti</div>
            )
        }else{
            return(
                <div>Welcome Guest</div>
            )
        } */
        /* End of Method 1: If Else */
        /* Method 2: Element Variables*/
        /* let message;
        if(this.state.isLogedIn){
            message = <div>Welcome Tapadyuti</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return (
            <div>{message}</div>
        ) */
        /* End of Method 2: Element Variable */
        /* Method 3: Ternary Operator*/
        /*  return(
            this.state.isLogedIn?<div>Welcome Tapadyuti</div>:<div>Welcome Guest</div>
        ) */
        /* End of Method 3: Ternary Operator */

        /* Method 4: Short Circuit Operator*/
        return this.state.isLogedIn && <div>Welcome Tapadyui</div>
        /* End of Method 4: Short Circuit Operator */
        
        /* return (
            <div>
                <div>
                    Welcome Tapadyuti
                </div>
                <div>
                    Welcome Guest
                </div>
            </div>
        ) */
    }
}

export default UserGreeting

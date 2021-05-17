import React from 'react'

function Heros({heroName}) {
    if(heroName==="Joker"){
        throw new Error("Not a Hero")
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Heros

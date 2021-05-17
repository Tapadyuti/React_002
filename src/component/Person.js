import React from 'react'

function Person({person}) { // remember to embeded the person which is in props inside {}
    return (
        <div>
            <h2>I am {person.name}, and my age is {person.age}.</h2>
        </div>
    )
}

export default Person

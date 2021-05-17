import React from 'react'
import Person from './Person';

function PersonList() {
    var persons = [
        {
            id:1,
            name:"Bruce",
            age:"30",
            skill:"BatMan",
            timeStamp:"07:00:00"
        },
        {
            id:2,
            name:"Clark",
            age:"30",
            skill:"SuperMan",
            timeStamp:"08:00:00"
        },{
            id:3,
            name:"Diana",
            age:"30",
            skill:"WonderWoman",
            timeStamp:"09:00:00"
        }
    ];
    var personList = persons.map((person)=>
        <Person key={person.id} person={person}></Person> //keys help react which items have changed or added or removed efficiently inserts new item at the doc tree
    )
    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList

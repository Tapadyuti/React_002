import React from 'react'

function NameList() {
    var names= ["Bruce", "Clark", "Diana"];
    var nameList = names.map((name, index)=><h2 key={index}>{index} : {name}</h2>)
    /* 
    return (
        <div>
            {
                names.map(name=>
                    <h2>{name}</h2>
                )
            }        
        </div>
    ) 
    
    -- OR it can be done as bellow usnig nameList variable;
    */
    return(
        <div>{nameList}</div>
    )
}

export default NameList

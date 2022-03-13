import React from 'react'

function ListComponent() {
    const nameList = ['bruce', 'clark', 'peter'];
    return (
        <div>
            {
                nameList.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default ListComponent

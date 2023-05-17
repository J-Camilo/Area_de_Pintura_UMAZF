import React from 'react'

export const Search = (props) => {
    return (
        <div className={props.styles}>
            <input type="search" name="Name" id={props.Id} placeholder={props.Placeholder} value={props.Value} onChange={props.OnChange}/>
        </div>
    )
}

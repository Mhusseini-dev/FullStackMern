import React from 'react';
import { Link } from '@reach/router';
export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <Link to={"/people/"+person._id} key={idx}>{person.title}</Link>
            })}
        </div>
    )
}

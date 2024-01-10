import React from "react";

const submitComponent = props => {

    

    
    return (
        <div className='container bg-dark-subtle'>
            <ul>
                {props.children.map((chirp, i) => (
                    <li key={i}>
                        <p>
                           {chirp}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default submitComponent;
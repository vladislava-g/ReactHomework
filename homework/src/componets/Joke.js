import React from 'react';

function Joke(props){
    return (
        <div className = "joke" style={{background: props.color}}>
            <div class="question" 
            style={{display: props.data.question === undefined?'none':'block'}}>{props.data.question}</div>
            <div>{props.data.punchLine}</div>
        </div>
    );
}

export default Joke;

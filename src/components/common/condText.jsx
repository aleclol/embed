import React from 'react';


const CondText = ({ condition, yes, no }) => {
    console.log(no)
    if (condition)
        return yes;
    else if (typeof no === 'undefined' || no.length === 0) {
        return <i>-</i>;
    }
    else
        return <span>{no}+</span>;

};


export default CondText;
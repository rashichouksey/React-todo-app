import React from 'react';


export default function Test(){
    const data =["Udit","Manish","Tybb"]
    return(
        <div>
            <ol>{
                data.map((item) =>
                <h3>{item}</h3> )
}</ol>
        </div>
    )
}
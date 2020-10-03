import React from 'react';

const Personlist= (props) =>{
    return(
        <div className="avatarstyle  ma4 bg-light-green dib pa4 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
             <h1 className="">{props.name}</h1>
             <p>{props.work}</p>
         </div>
    )
    

}
export default Personlist;
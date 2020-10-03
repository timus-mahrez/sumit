import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = ({name}) => {
    return <div className="maindiv_style">
    <h1> hello {name}</h1>
    <p> This is Sumits Page :)</p>
    <h1> This is also the react page</h1>
         </div>
}


 export default Demo;
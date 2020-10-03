import React,{Component} from 'react';
import './Person.css';
import Personlist from './Personlist';
import 'tachyons';



    class Person extends Component{

        constructor(){
            super();
            this.state ={
                name: "Welcome to my page"
            }
        }

            namechange(){
                this.setState({
                    name: "Subscribe to my webpage channel"

                })
            }
       
        render(){
            const personlistarray = [
                {
                    id:"1",
                    name:"Tech",
                    work:"Web Developer",
                },
                {
                    id:"2",
                    name:"Maharjan ",
                    work:"Front End Developer",
                },
                {
                    id:"3",
                    name:"Shakya ",
                    work:"Back End Developer",
                },
                {
                    id:"4",
                    name:"Sajaaan",
                    work:"Graphic Designer",
                }
        
            ]
        
            const arraypersoncard=personlistarray.map( (peoplecard, i) => {
        
                return <Personlist key={i} id={personlistarray[i].name}
                                  name={personlistarray[i].name}
                                  work= {personlistarray[i].work}/> 
        
                
            })
            return (    <div className="mainpage">
                
            <h1>{this.state.name}</h1>

                 {arraypersoncard}
         <button onClick= { () => this.namechange() }> Subscribe </button>
                </div>
    )

        }

    }

    

export default Person
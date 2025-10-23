import React from "react";  
import PropTypes from 'prop-types';   
  


function Student(props){
    return (
    <div  className="student-div">
        <p className="name">Name: {props.name}</p>
        <p className="age">Age: {props.age}</p>
        <p className="school">School: {props.school} </p>
        
    </div>)
}

Student.PropTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    school: PropTypes.string

};
Student.defaultProps = {
    name : "guest-user",
    age : 0,
    school : "No school"

}
export default Student
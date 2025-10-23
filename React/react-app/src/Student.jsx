function Name(props){
    return (
    <div  className="student-div">
        <p className="name">Name: {props.name}</p>
        <p className="age">Age: {props.age}</p>
        <p className="school">School: {props.school} </p>
        
    </div>)
}
export default Name
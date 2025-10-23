import propTypes from "prop-types";

function Welcome(props){
//     if (props.isLogedin ){
//         return <h2>Welcome {props.username}</h2>
//     }
//     else{return <h2>Please login to continue</h2>} 
const welcome =  <h2 className="welcome">Welcome {props.username}</h2>
const please =  <h2 className="please">Please login to continue</h2>



return(props.isLogedin ? welcome : please );
}                     

export default Welcome
Welcome.prototype ={
    username : propTypes.string,
    isLogedin : propTypes.bool


}
Welcome.defaultProps ={
    isLogedin : false,
    username: "Guest"
}
function Welcome(props){
//     if (props.isLogedin ){
//         return <h2>Welcome {props.username}</h2>
//     }
//     else{return <h2>Please login to continue</h2>} 
// }

return(props.isLogedin ?  <h2>Welcome {props.username}</h2> :
                     <h2>Please login to continue</h2>);
}

export default Welcome
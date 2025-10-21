import styles from './Button.module.css'


function Button(){

        const style  = {

    color: "white",
  background: "rgb(154, 154, 170)",
  border: "none",
  borderRadius: "10px",
  cursor : "pointer",
  padding : "10px 15px"
    }
    return(
        <button style= {style}>Click Me</button>
    )
}




export default Button

function InlineCSS(){


    return (
        <button>INLINE</button>
    )
}

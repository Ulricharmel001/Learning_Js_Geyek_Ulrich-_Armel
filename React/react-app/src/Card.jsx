import ProfilePic from './assets/profile.jpg'

function Card(){
return(
    <div className="Card">
        <img className='profile' src= {ProfilePic} alt="Profile Picture" />
        <h1 className='name'>Ulrich Armel</h1>
        <p className='prifiletext'>I code and play music</p>

    </div>
)
}
export default Card
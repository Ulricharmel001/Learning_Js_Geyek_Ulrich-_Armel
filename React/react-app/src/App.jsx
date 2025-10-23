
import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import List from './Intern.jsx' 
import Student from './Student.jsx'



function App() {
    return (
        <>
            <Header />

            {/* card element */}
            <Card />
              <Card />
              <Card/>
              <List/>

                <Card />
                {/* Button style with external style */}
                <Button />
                <Student name="Ulrich"    age = {30} school ="UBa"/>
                 <Student name="Emili"    age = {20} school ="Technipole"/>
            

            <Food />
            <Footer />
        </>
    ) 
}


export default App


import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import List from './Intern.jsx' 
import Student from './Student.jsx'
import  Welcome from './Welcome.jsx'
import ListItems  from './List.jsx'


function App() {
    return (
        <>
            <Header />
            <ListItems/>
        

            {/* card element */}
            <Card />
              <Card />
              <Card/>
                <Button />

              <Welcome  isLogedin  = {false} username ="Ulrich Armel" />
              <List/>

                {/* Button style with external style */}
                <Student name="Ulrich"    age = {30} school ="UBa"/>
                 <Student name="Emili"    age = {20} school ="Technipole"/>
                <Student   name ='Baye Brian' age = {21} school =  'Cotech'/>
                <Student />
            

            <Food />
            <Footer />
        </>
    ) 
}


export default App

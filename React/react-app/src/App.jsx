
import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'



function App() {
    return (
        <>
            <Header />

            {/* card element */}
            <Card />
              <Card />

                <Card />
                {/* Button style with external style */}
                <Button />

            <Food />
            <Footer />
        </>
    ) 
}


export default App

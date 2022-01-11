import react from 'react'
import '../../assets/styles/page.css'
import Iframe from 'react-iframe'


const Location = () =>{
    return (
        <main id="location">

        <article>

            <div>

                <h1>Donde encontrarnos</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio exercitationem debitis esse atque tempora nulla nihil, ab quo laborum earum id harum, similique sed, culpa distinctio quidem. Quibusdam, perspiciatis.</p>
    

            </div>

            
            
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.219574646208!2d-56.16748225725609!3d-34.88440224978519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f817844574435%3A0xa504c5b32195068d!2sOrigen%20Eco%20Almacen!5e0!3m2!1ses-419!2suy!4v1635273977567!5m2!1ses-419!2suy" width="600px" height="450" style="border:0;" allowfullscreen="" loading="lazy"/>

    </article>

    </main>
    ) 
}

export default Location;
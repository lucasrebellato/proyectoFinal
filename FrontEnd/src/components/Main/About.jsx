import react from 'react'
import '../../assets/styles/page.css'
import nosotrosFoto from "../../assets/imagenes/nosotros.jpg"



const About = () =>{
    return (

        <main id="about">
            <article>
                <div>
                    <h1>Nuestro Origen</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid magnam repudiandae consectetur nam provident ab et exercitationem ullam corporis cupiditate placeat, rem unde, nostrum repellat in cumque voluptatum quos?</p>
                </div>

                <img id="photo-cel" src={nosotrosFoto} alt="nosotros"/>

                <div className="info-cel">
                    <h1>Nuestra Mision</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore repellat eaque, magnam recusandae itaque ut ex reiciendis, quos velit vitae quia aperiam maxime esse, magni natus officia nemo tempore.</p>
                </div>

                <div className="info-pc">
            
                    <img src={nosotrosFoto} alt="nosotros"/>

                    <div>
                        <h1>Nuestra Mision</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore repellat eaque, magnam recusandae itaque ut ex reiciendis, quos velit vitae quia aperiam maxime esse, magni natus officia nemo tempore.</p>         

                    </div>
                
                </div>

             </article>
        


        </main>

    )
}

export default About;
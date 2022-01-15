import react from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/page.css'


const PreHeader = () =>{

    const logOut = () => {        
       localStorage.setItem("email", "")
       window.location.reload(false);
    }


    return (
        <div className="pre-header">

        {
            (localStorage.getItem("email").length  != 0) && (
                <p>Buenas <em>{localStorage.getItem("email")}</em></p>
            )
        }
        {
            (localStorage.getItem("email").length == 0) && (
                <Link to="/Sign-In">Iniciar sesión</Link>
            )
        }
         {
            (localStorage.getItem("email").length != 0) && (
                <Link to ="/"  onClick={() => logOut()}>Cerrar sesión</Link>
            )
        }
      
     
        </div>
    )
}


export default PreHeader;
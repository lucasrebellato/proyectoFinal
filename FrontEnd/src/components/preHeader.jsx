import react from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/page.css'


const PreHeader = () =>{

    return (
        <div className="pre-header">

        <Link to="/Sign-In">Iniciar sesión</Link>
     
        </div>
    )
}


export default PreHeader;
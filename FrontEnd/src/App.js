
import './App.css';
import PreHeader from './components/preHeader'
import Header from './components/Header'
import Index from './components/Main/Index'
import Shop from './components/Main/Shop'
import Contact from './components/Main/Contact'
import About from './components/Main/About'
import Location from './components/Main/Location'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/Sign/In';
import SignUp from './components/Sign/Up';

 
function App() {
  return (
    <>

    <Router>

      <Switch>
          <Route exact path="/Sign-In" component={SignIn}/>
            
          <Route exact path="/Sign-Up" component={SignUp}/>
            
          <Route  path="/">
           
            <PreHeader/>

            <Header/>
              
            <Switch>
                
              <Route exact path="/" component={Index}/>
            
              <Route path="/Tienda" component={Shop}/>
                    
              <Route path="/Ubicacion" component={Location}/>

              <Route path="/Nosotros" component={About}/>

              <Route path="/Contacto" component={Contact}/>
                          
            </Switch>

            <Footer/>

        </Route>

      </Switch>
    
    </Router>
    </>

  );
}

export default App;

import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import "./Components/NavBar";
import Navbar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home'
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/Contact" component={Contactus} />
        <Route exact path ="/About" component={AboutUs} />
        <Route exact path ="/Register" component={Register} />
        <Route exact path ="/Login" component={Login} />
        <Redirect to="/" />
      </Switch>


    </div>
  );
}

export default App;

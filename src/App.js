import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
 
 <Router>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            
            <Route path="/about">
              <About></About>
            </Route>
            {/* <Route path="/https://drive.google.com/file/d/1i4QlEjY81GlgvIYuCEya3NK__VLrZe6Z/view">
              <Resume></Resume>
            </Route> */}
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
           
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
        </Router>

    </div>
  );
}

export default App;

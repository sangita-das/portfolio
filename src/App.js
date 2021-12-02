import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllProject from './components/AllProject/AllProject';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyProject from './components/MyProject/MyProject';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
 
 <Router>
         <Navbar></Navbar> 
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            

<Route path="/projects">
              <AllProject></AllProject>
            </Route>

            <Route path="/myProject/:id">
              <MyProject></MyProject>
            </Route>
            
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
           
            <Route path="*">
              <NotFound></NotFound>
            </Route>

<Footer></Footer>
          </Switch>
        </Router>

    </div>
  );
}

export default App;

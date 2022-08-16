import React from "react";
import Indexmain from "./Resume/main/indexmain";
import Navbar from "./Resume/main/Navbar";
import Contact from "./Resume/contact/contact";
import Footer from "./Resume/main/Footer";
import Honestly from "./Resume/honestly/honestly";
import Home from "./Resume/page/home";
import Start from './Resume/page/firstpage';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//import "./Resume/main/nav.css";
//import Home from "./Resume/page/indexpage";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/indexmain' exact component={Indexmain}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/honestly' component={Honestly}/>
                </Switch>
                <Start/>
                <Footer/>
            </Router>
        </React.Fragment>
    );
}

export default App;
/*
   <div className="App">
      <Router>
        <div>
          <Navbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Indexmain/>
              </li>
              <li>
                <Link to="/about">About</Link>
                <Honestly />
              </li>
              <li>
                <Link to="/users">Users</Link>
                <Contact />
              </li>
            </ul>
          </Navbar>
          
            </div>
            </Router>
            <Footer />
          </div>
*/

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Project from './components/Project'


import './App.css';

function App() {
  return (
    <Router>
      <div className="app mt-8">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/works" component={Works} />

        <Route exact path="/project" component={Project} />
        
        {/* <Route exact path="/Post" component={Post} /> */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
      </div>
    </Router>
 
  );
}

export default App;

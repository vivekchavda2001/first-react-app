import Nav from './Nav';
import Home from './Components/Home';
import Post from './Components/Post';
import Uncontrol from './Components/UncontrolledForm';
import Control from './Components/ControlledForm';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav/>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post">
          <Post></Post>
        </Route>
        <Route path="/controlledform">
          <Control></Control>
        </Route>
        <Route path="/uncontrolledform">
        <Uncontrol/>
        </Route>

      </Switch>
     
     </Router>
    </div>
  );
}

export default App;

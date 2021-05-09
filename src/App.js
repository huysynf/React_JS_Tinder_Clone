import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';


function App() {
  return (
      <div className="App">
        <Header/>
        <Router>
          <Switch>

            <Route path={'/chat'} >
              <h1>Chat Page</h1>
            </Route>
            <Route path={'/'}>
              <TinderCards />
              <SwipeButton />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
{/*  Tinker cards */}

{/*  Button below tinder cards */}

{/*  chat screen */}

{/*  individual chat screen */}
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path={'/chat/:person'} >
              <Header backButton={'/chat'}/>
              <ChatScreen />
            </Route>
            <Route path={'/chat'} >
              <Header backButton={'/'}/>
              <Chats />
            </Route>
            <Route path={'/'}>
              <Header/>
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
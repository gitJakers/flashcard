import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import FlashCard from './pages/flashcard.component';
import AddCard from './pages/addCard';
import SignIn from './pages/signIn';
import history from './services/history';
import NavBar from './pages/navbar';


function App() {
  
  return (
    <div className="background">
      <Router>
        <Switch>
          <Route path="/login">
            <Container className="signUpCard d-flex justify-content-center align-items-center">
              <div className="signUpSize">
                <SignIn history={history} />
              </div>
            </Container>
          </Route>
          <Route path="/flashcards">
            <NavBar />
            <FlashCard/>
          </Route>
          <Route path="/addcard">
            <NavBar />
            <AddCard/>
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
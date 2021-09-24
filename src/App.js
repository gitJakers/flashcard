import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlashCard from './pages/flashcard.component';
import AddCard from './pages/addCard';
import SignIn from './pages/signIn';
import {logOut} from './services/firebase';
import { useHistory } from 'react-router';
import  history from './services/history';

function App() {

  return (
    <div className="background">
      <Router>
        <Container className="d-flex justify-content-center py-5">
          <Row>
            <Col md={6}>
              <Link to="/flashcards"><button className="btn btn-primary">Flashcards</button></Link>
            </Col>
            <Col md={6}>
              <Link to="/addcard"><button className="btn btn-secondary">Add Card</button></Link>
            </Col>
            <Col md={6}>
              <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
            </Col>
            <Col md={6}>
              <Link to="/login"><button onClick={(e) => {logOut(e)}} className="btn btn-secondary">Log Out</button></Link>
            </Col>
          </Row>
        </Container>

        <Switch>
          <Route path="/login">
            <SignIn history={history}/>
          </Route>
          <Route path="/flashcards">
            <FlashCard/>
          </Route>
          <Route path="/addcard">
            <AddCard/>
          </Route>
          <Route path="/">
            <h1>Welcome to the default page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
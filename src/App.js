import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// import { firebase } from './services/firebase';
//This is importing the entire react bootstrap library
//import {Container, Row, Col} from 'react-bootstrap';
//This is importing JUST the container component from the react bootstrap library
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlashCard from './pages/flashcard.component';
import AddCard from './pages/addCard';

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
          </Row>
        </Container>

        <Switch>
          <Route path="/login">
            <h2>actual login page</h2>
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

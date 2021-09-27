import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { logIn, signUp } from "../services/firebase";
import { withRouter } from 'react-router';

const SignIn = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginCard, setLoginCard] = useState(true);
    let history = props.history;

    function handleSubmit(e, loginCard) {
        e.preventDefault();
        if(loginCard){
            logIn(email, password, history);
            console.log(true, 'click');
        }else{
            signUp(email, password, history);
            console.log(false, 'click');
        }
    };

    function changeCard(e) {
        e.preventDefault();
        setLoginCard(!loginCard);
    }
    
    return (
        <>
            <h1 className="loginTitle">Flash Cards</h1>
            <Card className="mt-5">
                <Card.Body>
                    {/* Log In card */}{/* Sign Up card */}
                    <Container className="signInBG">
                        <h1 className="d-flex justify-content-center">{loginCard ? 'Log In' : 'Sign Up'}</h1>
                        <Form onSubmit={(e) => handleSubmit(e, loginCard)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={(e) => setEmail(e.target.value)} name="email" required type="email" placeholder="Enter email" />
                                <Form.Text className="warningText">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="loginBtn" type="submit">
                                {loginCard ? "Login" : "Create"}
                            </Button>
                            <div className="my-2">
                                {loginCard ? "Don't have an account?" : "Have an account?"} <Button className="signUpBtn" variant="outline" onClick={(e) => changeCard(e)}>{loginCard ? "Sign Up": "Go to Log In"}</Button>
                            </div>
                        </Form>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}
export default withRouter(SignIn);

//This is initially what i had for my sign up page and decided to change it to a 
//functional component as there was a memory leak issue with the componentWillUnmount and setTimeout
//
// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             signedIn: false,
//             currentUser:'',
//             auth: props.auth,
//             history: props.history
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleEmail = this.handleEmail.bind(this);
//         this.handlePass = this.handlePass.bind(this);
//         this.test = this.test.bind(this);
//     }

//     handleSubmit(e) {
//         // const auth = getAuth();
//         // console.log(auth);
//         logIn(this.state.email, this.state.password, this.state.history);
//         this.setState({currentUser: this.state.auth.currentUser.email});
//         e.preventDefault();
//         // this.setState({currentUser: });
//         // console.log(auth);
//         // setTimeout(() => {
//         //     console.log(getAuth().currentUser.email);
//         // }, 1000);
//         // if (this.state.currentUser === '') {
//             // console.log(auth);
//             // this.setState({ currentUser: auth.currentUser.email })
//         // }
//     }


//     handleEmail(e) {
//         this.setState({ email: e.target.value });
//     }

//     handlePass(e) {
//         this.setState({ password: e.target.value });
//     }

//     test(e) {
//         console.log(this.state.currentUser);
//     }

//     render() {
//         return (
//             <>
//                 <Container className="signInBG">
//                         <h1 className="d-flex justify-content-center">Welcome to the login page</h1>
//                         <h2>{this.state.currentUser}</h2>
//                         <Form onSubmit={this.handleSubmit}>
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control value={this.email} onChange={this.handleEmail} required type="email" placeholder="Enter email" />
//                                 <Form.Text className="warningText">
//                                     We'll never share your email with anyone else.
//                                 </Form.Text>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control value={this.password} onChange={this.handlePass} required type="password" placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" onClick={this.handleSubmit}>
//                                 Submit
//                             </Button>
//                             <Button variant="primary" onClick={this.test}>
//                                 Test
//                             </Button>
//                         </Form>
//                 </Container>
//             </>
//         )
//     }
// }

// export default withRouter(SignIn);
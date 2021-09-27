import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getFlashCards, getData } from "../services/firebase.js";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashCards: [],
      isLoaded: false,
      term: true,
      index: 0,
      isFlipped: false,
      category: "Cards",
    };
  }

  PrevCard = () => {
    if (this.state.index < 1) {
      this.setState({ index: this.state.flashCards.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  NextCard = () => {
    if (this.state.index >= this.state.flashCards.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  async componentDidMount() {
    await getFlashCards();
    this.setState({ flashCards: getData(this.state.category) });
    this.setState({ isLoaded: true });
  }

  handleClick = (e) => {
    this.setState({ category: e.target.textContent});
    this.setState({ flashCards: getData(e.target.textContent)})
  }

  handleCategory = (e) => {
    this.setState({ category: e.target.text });
  };

  render() {
    return (
      <>
        <Container className="mb-5 categoryBtnBox">
          <Button disabled={!this.state.isLoaded} className="categoryBtn" onClick={this.handleClick}>All Categories</Button>
          <Button disabled={!this.state.isLoaded} className="categoryBtn" onClick={this.handleClick}>Javascript</Button>
          <Button disabled={!this.state.isLoaded} className="categoryBtn" onClick={this.handleClick}>React</Button>
          <Button disabled={!this.state.isLoaded} className="categoryBtn" onClick={this.handleClick}>C#</Button>
          <Button disabled={!this.state.isLoaded} className="categoryBtn" onClick={this.handleClick}>Miscellaneous</Button>
        </Container>
        {/* FlashCard */}
        <Container>
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="vertical"
          >
            <Container className="card-front">
              <h1>
                {this.state.isLoaded
                  ? this.state.flashCards[this.state.index].Term
                  : ""}
              </h1>
            </Container>
            <Container className="card-back">
              <h1>
                {this.state.isLoaded
                  ? this.state.flashCards[this.state.index].Definition
                  : ""}
              </h1>
            </Container>
          </ReactCardFlip>
          {/* Controls */}
          <Container className="center my-5">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <button
                  icon={faArrowLeft}
                  onClick={this.PrevCard}
                  className="prevBtn"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Previous
                </button>
              </Col>
              <Col className="mx-3">
                <button
                  onClick={() =>
                    this.setState({ isFlipped: !this.state.isFlipped })
                  }
                  className="flipBtn"
                >
                  Flip Card!
                </button>
              </Col>
              <Col>
                <button onClick={this.NextCard} className="nextBtn">
                  <FontAwesomeIcon icon={faArrowRight} />
                  Next
                </button>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

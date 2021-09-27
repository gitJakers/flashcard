import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getFlashCards, getData } from "../services/firebase.js";
import ReactCardFlip from "react-card-flip";

export default class FlashCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashCards: [],
      isLoaded: false,
      term: true,
      index: 0,
      isFlipped: false,
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
    this.setState({ flashCards: getData() });
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <>
        {/* FlashCard */}
        <Container>
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipDirection="vertical"
          >
            <Container className="card-front">
              <h1>
                Front of card -
                {this.state.isLoaded
                  ? this.state.flashCards[this.state.index].Term
                  : ""}
              </h1>
            </Container>
            <Container className="card-back">
              <h1>
                Back of card -
                {this.state.isLoaded
                  ? this.state.flashCards[this.state.index].Definition
                  : ""}
              </h1>
            </Container>
          </ReactCardFlip>
          {/* Controls */}
          <Container className="center my-5">
            <Row>
              <Col>
                <button onClick={this.PrevCard} className="prevBtn">
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

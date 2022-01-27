import React from "react";
import "../App.css";
import "../index.css";
import { Button, Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class MainPage extends React.Component {
  state = {
    bookshelf: require("../media/Bookshelf.jpg"),
    authors: [
      {
        name: "Andrew Smith",
        image: require("../media/Andrew.jpg"),
        goodreadsId: 1383409,
      },
      {
        name: "Brenna Yovanoff",
        image: require("../media/Brenna.jpg"),
        goodreadsId: 3023658,
      },
      {
        name: "Catherine Fisher",
        image: require("../media/Catherine.jpg"),
        goodreadsId: 190887,
      },
      {
        name: "Maggie Stiefvater",
        image: require("../media/Maggie.jpg"),
        goodreadsId: 1330292,
      },
      {
        name: "Mindy McGinnis",
        image: require("../media/Mindy.jpg"),
        goodreadsId: 5351825,
      },
      {
        name: "Rachel Lynn Solomon",
        image: require("../media/Rachel.jpg"),
        goodreadsId: 15298200,
      },
    ],
    activeImageIndex: -1,
    selectedAuthor: undefined,
  };

  cycleAuthors = (e) => {
    let newActiveIndex =
      this.state.activeImageIndex === this.state.authors.length - 1
        ? 0
        : this.state.activeImageIndex + 1;
    this.setState({
      activeImageIndex: newActiveIndex,
    });
  };

  getPicture = () => {
    return this.state.activeImageIndex >= 0
      ? this.state.authors[this.state.activeImageIndex].image
      : this.state.bookshelf;
  };

  handleAuthorSelect = (authorName) => {
    const index = this.state.authors.map((e) => e.name).indexOf(authorName);
    this.setState({ selectedAuthor: authorName, activeImageIndex: index });

    // update activeImageIndex (this is state), based on selectedAuthor's index
  };

  // authorPage = () => {
  //   const newPage = window.open(this.state.link, "_blank");
  //   if (newWindow) newWindow.opener = null;
  // };
  // onClick={() => authorPage()}

  handleGoodreadsPage = () => {
    // only going to use state, not set here
    //  authors index and active image index
    // this.state.authors({ activeImageIndex: index });

    // let localActiveImageIndex = this.state.activeImageIndex;
    // let localAuthorsArray = this.state.authors;
    // let goodreadsId = localAuthorsArray[localActiveImageIndex].goodreadsId;

    let goodreadsId =
      this.state.authors[this.state.activeImageIndex].goodreadsId;

    let url = "https://www.goodreads.com/author/show/" + goodreadsId;
    window.open(url, "_blank");

    // const url = "https://www.google/show/author";
    // window.open("https://www.goodreads.com/author/show/" + {this.state.authors.name.goodreadsId}
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "gray",
        }}
      >
        <Container className="container-fluid">
          {""}
          {/* Headings */}
          <Row>
            <Col xs lg="2"></Col>
            <Col xs lg="2">
              <h3>I read.</h3>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col xs lg="3"></Col>
            <Col xs lg="2">
              <h2>A LOT.</h2>
            </Col>
          </Row>
          <Row>
            <Col xs lg="4"></Col>
            <Col xs lg="8">
              <h1>Let me show you some of my favorites.</h1>
            </Col>
          </Row>{" "}
          <Row>
            <Col xs lg="7"></Col>
            {/* <Col xs lg="1"></Col> */}
            <Col xs lg="2">
              <h6>(Click the picture.)</h6>
            </Col>
          </Row>
          {/* Goodreads Button */}
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "5px" }}
          >
            <Col xs lg="2">
              <Button
                variant="dark"
                size="sm"
                href="https://www.goodreads.com/"
                target="_blank"
              >
                I read a lot too.
              </Button>
              <Row>
                <Col xs lg="7"></Col>
              </Row>
            </Col>
          </Row>
          {/* Image CSS */}
          <Row className="justify-content-md-center">
            <Col xs={10}>
              <img
                width="600px"
                height="600px"
                margin-left="1200px"
                className="bookshelf"
                src={this.getPicture()}
                alt={"Bookshelf"}
                onClick={this.cycleAuthors}
              ></img>
            </Col>
          </Row>
          {/* Dropdown Bar */}
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "5px" }}
          >
            <Col xs lg="2">
              <Dropdown onSelect={this.handleAuthorSelect}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  {/* A function that returns state or default string */}
                  {this.state.selectedAuthor === undefined
                    ? "Select an author."
                    : this.state.selectedAuthor}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {this.state.authors.map((e) => {
                    return (
                      <Dropdown.Item as="button" eventKey={e.name}>
                        {e.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown></Dropdown>
            </Col>
            <Col xs lg="2">
              <Button
                variant="dark"
                size="sm"
                // onClick={() => {"https://www.goodreads.com/" + {this.state.authors.name}}
                onClick={this.handleGoodreadsPage}
                disabled={this.state.activeImageIndex == -1}
                // window.open(authorPage, "_blank")}
                // href="https://www.goodreads.com/"
                // target="_blank"
              >
                Learn more.
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;

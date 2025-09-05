import React from "react";
import "./App.css";
import image from "./images/awkward-dog.png";
import { Button, Col, Container, Row } from "react-bootstrap";

console.log(image);

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Evan Walz - UD CISC275 with React Hooks and TypeScript
                <p> Hello World </p>
            </header>
            <h1> Basic HTML and CSS </h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "100%",
                                backgroundColor: "red",
                                marginBottom: "10px",
                                marginTop: "10px",
                            }}
                        ></div>
                        <img src={image} alt="A picture of an awkward dog." />
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "50px",
                                width: "100%",
                                backgroundColor: "red",
                                marginBottom: "10px",
                                marginTop: "10px",
                            }}
                        ></div>
                        <p>Three facts about me:</p>
                        <ol>
                            <li>I am a senior!</li>
                            <li>This is my first time using HTML and CSS</li>
                            <li>I love this awkward dog photo</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

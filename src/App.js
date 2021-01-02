import React, { useState } from "react";
// import "./App.css";
import Timer from "./components/Timer";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [amount, setamount] = useState(() => 25);

  function increase() {
    setamount((curramount) => curramount + 1);
  }

  function decrease() {
    if (amount <= 1) {
      setamount((curramount) => 1);
    } else {
      setamount((curramount) => curramount - 1);
    }
  }

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#282c34",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Timer proptime={amount} />

          <Row style={{ padding: "2em" }}>
            <StyledText onClick={() => setamount(25)}>Pomodoro</StyledText>
            <StyledText onClick={() => setamount(5)}>Short Break</StyledText>
            <StyledText onClick={() => setamount(15)}>Long Break</StyledText>
          </Row>
          <Row>
            <MinController>
              <StyledButton onClick={() => increase()}> + </StyledButton>
              <p style={{ lineHeight: "35pt" }}>{amount}</p>
              <StyledButton onClick={() => decrease()}> - </StyledButton>
            </MinController>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// const StyledTimer = styled(Timer)``;

const StyledButton = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #5493dd;
  color: #5493dd;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const StyledText = styled.button`
  background: transparent;
  // width: 50px;
  // height: 50px;
  border-radius: 25px;
  border: 2px solid #5493dd;
  color: #5493dd;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const MinController = styled.div`
  color: #5493dd;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  text-align: center;
  // display: flex,
  // flex-wrap: wrap,
`;

// const Container = styled.div`
//   color: #5493dd;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin: 2em;
// `;

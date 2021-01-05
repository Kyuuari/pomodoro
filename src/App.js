import React, { useState, useContext } from "react";
// import "./App.css";
import Timer from "./components/Timer";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "./context/ThemeState"
import Sidebar from "./components/Sidebar"

const App = (props) => {
  const [amount, setamount] = useState(() => 25);
  const { color, setColor } = useContext(ThemeContext);

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

    <>
      <Sidebar />
      <Container
        fluid
        style={{
          backgroundColor: color.primary,
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
              <StyledText value={color.secondary} onClick={() => setamount(25)}>Pomodoro</StyledText>
              <StyledText value={color.secondary} onClick={() => setamount(5)}>Short Break</StyledText>
              <StyledText value={color.secondary} onClick={() => setamount(15)}>Long Break</StyledText>
            </Row>
            <Row>
              <MinController value={color.secondary}>
                <StyledButton value={color.secondary} onClick={() => increase()}> + </StyledButton>
                <p value={color.secondary} style={{ lineHeight: "35pt" }}>{amount}</p>
                <StyledButton value={color.secondary} onClick={() => decrease()}> - </StyledButton>
                {/* <StyledButton onClick={() => setColor("white")}> colorWhite </StyledButton> */}
              </MinController>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

// const StyledTimer = styled(Timer)``;

const StyledButton = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${props => props.value};
  color: ${props => props.value};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:focus {
    outline: none;
}
`;

const StyledText = styled.button`
  background: transparent;
  // width: 50px;
  // height: 50px;
  border-radius: 25px;
  border: 2px solid ${props => props.value};
  color: ${props => props.value};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:focus {
    outline: none;
}
`;

const MinController = styled.div`
  color: ${props => props.value};
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

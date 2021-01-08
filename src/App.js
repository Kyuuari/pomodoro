import React, { useState, useContext } from "react";
import "./App.css";
import Timer from "./components/Timer";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "./context/ThemeState";
import Sidebar from "./components/Sidebar";

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

      <Container
        fluid
        style={{
          backgroundColor: color.primary,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          overflow: "auto",
        }}
      >

        <Row
        // style={{
        //   display: "block",
        // }}
        >
          <Col
            style={{
              justifyContent: "flex-start",
              width: "100vw",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Sidebar style={{}} />
            <Timer proptime={amount} />

            <Row
              style={{
                display: "flex",
                padding: "2em",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledText value={color} onClick={() => setamount(25)}>
                Pomodoro
              </StyledText>
              <StyledText value={color} onClick={() => setamount(5)}>
                Short Break
              </StyledText>
              <StyledText value={color} onClick={() => setamount(15)}>
                Long Break
              </StyledText>
            </Row>
            <Row>
              <MinController value={color}>
                <StyledButton value={color} onClick={() => increase()}>
                  {" "}
                  +{" "}
                </StyledButton>
                <p style={{ lineHeight: "35pt" }}>{amount}</p>
                <StyledButton value={color} onClick={() => decrease()}>
                  {" "}
                  -{" "}
                </StyledButton>
              </MinController>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

const StyledButton = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.value.secondary};
  color: ${(props) => props.value.secondary};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:focus {
    outline: none;
}
&:hover{
  background: ${(props) => props.value.secondary};
  color: ${(props) => props.value.primary}
}

-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Old versions of Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none;
`;

const StyledText = styled.button`
  background: transparent;
  // width: 50px;
  // height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.value.secondary};
  color: ${(props) => props.value.secondary};
  margin: 5px;
  padding: 0.25em 1em;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => props.value.secondary};
    color: ${(props) => props.value.primary};
  }
`;

const MinController = styled.div`
  color: ${(props) => props.value.secondary};
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

import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeState'
import styled from 'styled-components'

const ColorPicker = () => {
    const { color, setColor } = useContext(ThemeContext);

    function setBackground(color) {
        setColor(currentState => ({ ...currentState, primary: color }))
    }

    function setForeground(color) {
        setColor(currentState => ({ ...currentState, secondary: color }))
    }

    return (
        <>
            <div style={{ color: 'white', padding: '15px' }}>BackgroundColor</div>
            <ColorPick>
                <ColorButton color={"#5493dd"} onClick={() => setBackground("#5493dd")} />
                <ColorButton color={"#7329C5"} onClick={() => setBackground("#7329C5")} />
                <ColorButton color={"#7DC729"} onClick={() => setBackground("#7DC729")} />
                <ColorButton color={"#C7292E"} onClick={() => setBackground("#C7292E")} />
                <ColorButton color={"white"} onClick={() => setBackground("white")} />
                <ColorButton color={"#fffd98"} onClick={() => setBackground("#fffd98")} />
            </ColorPick>
            <ColorPick>
                <ColorButton color={"#23395B"} onClick={() => setBackground("#23395B")} />
                <ColorButton color={"#B9E3C6"} onClick={() => setBackground("#B9E3C6")} />
                <ColorButton color={"#214F4B"} onClick={() => setBackground("#214F4B")} />
                <ColorButton color={"#2DE1FC"} onClick={() => setBackground("#2DE1FC")} />
                <ColorButton color={"#E1BC29"} onClick={() => setBackground("#E1BC29")} />
                <ColorButton color={"#FFC857"} onClick={() => setBackground("#FFC857")} />
            </ColorPick>
            <ColorPick>
                <ColorButton color={"#282c34"} onClick={() => setBackground("#282c34")} />
                <ColorButton color={"#F4F1DE"} onClick={() => setBackground("#F4F1DE")} />
            </ColorPick>

            <div style={{ color: 'white', padding: '15px' }}>ForegroundColor</div>
            <ColorPick>
                <ColorButton color={"#5493dd"} onClick={() => setForeground("#5493dd")} />
                <ColorButton color={"#7329C5"} onClick={() => setForeground("#7329C5")} />
                <ColorButton color={"#7DC729"} onClick={() => setForeground("#7DC729")} />
                <ColorButton color={"#C7292E"} onClick={() => setForeground("#C7292E")} />
                <ColorButton color={"white"} onClick={() => setForeground("white")} />
                <ColorButton color={"#fffd98"} onClick={() => setForeground("#fffd98")} />
            </ColorPick>
            <ColorPick>
                <ColorButton color={"#23395B"} onClick={() => setForeground("#23395B")} />
                <ColorButton color={"#B9E3C6"} onClick={() => setForeground("#B9E3C6")} />
                <ColorButton color={"#214F4B"} onClick={() => setForeground("#214F4B")} />
                <ColorButton color={"#2DE1FC"} onClick={() => setForeground("#2DE1FC")} />
                <ColorButton color={"#E1BC29"} onClick={() => setForeground("#E1BC29")} />
                <ColorButton color={"#FFC857"} onClick={() => setForeground("#FFC857")} />
            </ColorPick>
            <ColorPick>
                <ColorButton color={"#282c34"} onClick={() => setForeground("#282c34")} />
                <ColorButton color={"#F4F1DE"} onClick={() => setForeground("#F4F1DE")} />
            </ColorPick>

        </>
    )
}

export default ColorPicker

const ColorButton = styled.button`
height: 25px;
width: 25px;
background-color: ${props => props.color};
border-radius: 50%;
display: inline-block;
border: none;
&:focus {
    outline: none;
}
`;

const ColorPick = styled.div`
padding: 10px;
display: flex;
justify-content: flex-start;
`;

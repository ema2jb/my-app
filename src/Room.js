import React, {useState} from 'react'
import styled from 'styled-components'

const App = styled.div`
position: relative;
width:500px;
height:500px;
border: 10px solid black;
margin: 0 auto;
`;

const Wrapper = styled.div`
    position: absolute;
    top:20px;
    background : ${props =>(props.lampOn?'orange':'grey')};
    left: ${props =>(props.position === 'left'?'20px':'380px')};
    width:100px;
    height:100px;
    border-radius:50px;
`

const Button =styled.button`
    position:absolute;
    left: ${props =>(props.position === 'left'?'20px':'380px')};
    bottom:20px;
    background:white;
    color:black;
    border:1px solid black;
    border-radius: 10px;
    height:50px;
    width: 100px;
    cursor:pointer;
`


const Room = ()=>{
    const [isLampOneOn, setLampOneOn] = useState(false);
    const [isLampTwoOn, setLampTwoOn] = useState(true);

    const handleLightOne = () => setLampOneOn(prev => !prev)
    const handleLightTwo = () => setLampTwoOn(prev => !prev)

    return <App>    
        <Lamp lampOn={isLampOneOn} position = "left"/>
        <Lamp lampOn={isLampTwoOn} position = "right"/>
        <LightSwitch 
            name='one'
            callBack = {handleLightOne}
            switchOn = {isLampOneOn}
            position = 'left'
        />
        <LightSwitch 
            name = 'two'
            callBack = {handleLightTwo}
            switchOn = {isLampTwoOn}
            position = 'right'
        />
    </App>

}

const Lamp = ({lampOn, position})=>{
    return <Wrapper lampOn={lampOn} position={position}>
        <div />
    </Wrapper>

}

const LightSwitch=({name, callBack, switchOn, position})=>{
    return <Button onClick={callBack} position={position}>
            {switchOn?'On':'Off'}
        </Button>

}

export default Room
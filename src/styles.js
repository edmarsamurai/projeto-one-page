import styled from "styled-components";
import Fundo from '../src/img/fundo.jpg'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
background-image: url(${Fundo});
background: cover;
background-repeat: no-repeat;
background-position: center;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ToDoList = styled.div`
background: #fff;
padding: 30px 20px;
border-radius: 7px;

ul {
    padding: 0;
    margin-top: 60px;
}

@media(max-width: 600px) {
width: 50%;
display: flex;
flex-direction: column;
}

`
export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
height: 40px;
margin-right: 40px;
width: 340px;
padding-left: 10px;

@media(max-width: 600px) {
width: 80%;
display: block;
margin: 0 auto;
}
`

export const Button = styled.button`
background: #8052EC;
border-radius: 7px;
border: none;
cursor: pointer;
color: #fff;
font-size: 17px;
line-height: 2px;
height: 40px;
width: 130px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}

@media(max-width: 600px) {
display: block;
margin: 20px auto;
}
`

export const ListItem = styled.div`
background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
box-shadow: 1px 4px 10px 0px #00000033;
height: 60px;
border-radius: 7px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li {
    list-style: none;
}

@media(max-width: 600px) {
width: 90%;
}

`

export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`

export const Check = styled(FcCheckmark)`
cursor: pointer;
`
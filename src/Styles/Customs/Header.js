import styled from "styled-components";

export const Row = styled.div`
    input{
        width: 400px;
        height: 50px;
        outline: none;
        color: ${props => props.theme.primaryText};
        border-color: ${props => props.theme.primaryText} !important;
        @media(max-width: 576px){
            width: 250px;
        }
        @media(max-width: 400px){
            width: 200px;
            height: 40px;
        }
    }
    .icon{
        font-size: 35px;
        color: ${props => props.theme.iconColor};
        transition: background-color .2s;
        cursor: pointer;
        &:hover{
            background-color: ${props => props.theme.iconBg};
        }
        @media(max-width:400px){
            font-size: 25px;
        }
    }
    .circle{
        width:12px;
        height: 12px;
        cursor: pointer;
        &:hover{
            opacity: 0.6;
        }
        @media(max-width:400px){
            width:10px;
            height: 10px;
        }
    }
`
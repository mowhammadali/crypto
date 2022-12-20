import styled from "styled-components";

export const Container = styled.main`
    table{
        border-color: ${props => props.theme.primaryText} !important;
    }
    .th{
        @media(max-width: 768px){
            font-size: 12px;
        }
    }
`
import styled from "styled-components";

export const Tr = styled.tr`
    img{
        width: 50px;
        @media(max-width: 768px){
            width: 30px;

        }
    }
    p{
        @media(max-width: 768px){
            font-size: 14px;
        }
    }
    h6{
        @media(max-width: 768px){
            font-size: 14px;
        }
    }
`
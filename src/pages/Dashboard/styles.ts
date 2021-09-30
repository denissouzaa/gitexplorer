import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;

    margin-top: 40px;
`;

export const Form = styled.form`
    margin-top: 30px;
    max-width: 700px;
    
    display: flex;

    input { 
        flex: 1;
        padding: 22px;
        background-color: #fff;
        border: 0px;
        width: 60%;  
    }

    button { 
        padding: 22px;
        border: 0px;

        background-color: #2b9348;
        color: #fff;

        &:hover {
            background-color: #55a630;
        }
    }`;

export const Error = styled.p`
        margin-top: 20px;
        color: #e63946;
 `   

export const Repository = styled.div`
    margin-top: 40px;
    max-width: 700px;

    a {
        background-color: #ffffff;
        border-radius: 5px;
        padding: 15px;
        display: block;
        display: flex;

        align-items: center;
        text-decoration: none;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 10px;
        }
     }

    img {
        width: 70px;
        border-radius: 50%;
    }

    div {
        margin-left: 20px;
    }

    strong {
        color: #000;
    }

    p {
        margin-top: 5px;
        color: #6c757d;
    }

    svg {
        margin-left: auto;
        color: #CBCBD6;
    }
`

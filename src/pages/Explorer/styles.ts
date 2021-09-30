import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        color: #495057;

        &:visited {
            color: #495057;
        }

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepositoryInfo = styled.div`
    margin-top: 50px;
    max-width: 700px;

    header {
        display: flex;
        align-items: center;
    }

    img {
        width: 70px;
        border-radius: 50%;
    }

    div {
        margin-left: 20px;
    }

    p {
        margin-top: 5px;
        color: #6c757d;
    }

    ul {
        margin-top: 20px;
        list-style: none;
        display: flex;

        li {
            & + li {
                margin-left: 80px;
            }
            strong {
                display: block;
                font-size: 30px;
                color: #3d3d4d;
            }
            
            span {
                display: block;
                margin-top: 4px;
                color: #3d3d4d;
            }
        }

    }

`

export const RepositoryLista = styled.div`
    margin-top: 50px;
    max-width: 700px;

    a {
        background-color: #ffffff;
        border-radius: 5px;
        padding: 20px;
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

    div {
        margin-left: 20px;
    }

    strong {
        color: #212529;
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

export const Footer = styled.footer`
    bottom: 0px;
    position: absolute;

    p {
        color: #343a40;
    }
    
` 

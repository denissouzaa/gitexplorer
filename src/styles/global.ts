import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body { 
        background-image: url(${githubBackground});
        background-repeat: no-repeat;
        background-position: 70% top;
        background-color: #F0F0F5;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        
        height: 100vh;
    }

    button {
        cursor: pointer;
    }

`;
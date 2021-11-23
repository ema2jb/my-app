import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth:1280px;
        --white:#fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontMed:1.5rem;
        --fontBig: 1.2rem;
        --fontSmall:1rem;
    }

    *{
        box-sizing:boder-box;
    }

    body {
        padding: 0;
        margin: 0;

        h1{
            font-weight:600;
            font-size:2rem;
            color: var(--white)
        }

        h3{
            font-weight: 600;
            font-size:1.1rem;
        }

        p{
            font-size:1rem;
            color: var(--white)
        }
    }

`
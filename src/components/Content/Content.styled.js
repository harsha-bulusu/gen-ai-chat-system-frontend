import styled from 'styled-components'

export const ContentContainer = styled.main`
    flex: 1;
    overflow-y: auto;
    padding: 50px 200px;
`

export const WelcomeMessage = styled.h1`
    font-size: 34px;
    font-weight: bold;
    background: linear-gradient(90deg, 
        #663399 0%,    /* Rebecca Purple */
        #FF0000 25%,   /* Red */
        #FFC0CB 50%,   /* Pink */
        #663399 75%    /* Rebecca Purple */
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /* Fixes the issue */
    margin: 20px 0;
`;

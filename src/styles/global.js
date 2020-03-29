import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    transition: color, background 1s ease 0s, transform 1s ease 0s;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  } 
  
  
`;
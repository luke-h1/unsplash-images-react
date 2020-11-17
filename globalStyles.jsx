import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

// Global fonts:
$noto: 'Noto Sans JP', sans-serif;

// Global colors
$iconHover: #2ab7ca;
$lightTextColor: #fff;
$darkTextColor: #000;
$borderBottom: #82ddf0;

$backgroundColor: #725d68;


* { 
  box-sizing: border-box; 
  padding: 0;
  margin: 0;

  body { 
    font-family: $noto;
  }
}

`;

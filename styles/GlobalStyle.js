import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  --bg-light-yellow: #F2F2EE;
  --bg-light-blue: #EDF2FF;
  --bg-light-red: #F2EEEE;
  
  --light-yellow: #FFF6C5;
  --yellow: #F8C231;
    
  --light-red: #FFC5EC;
  --red: #FF6969;
  --pink: #ED81FF;
  --light-pink: #FFE9FA;
  
  --blue: #00A3FF;
  --light-blue: #B7F2FF;
  
  --white: #FFFFFF;
  --white20: #ecedee;
  --black: #11181C;
  --light-gray: #858585;
  --gray: #687076;
  --light-black: rgba(0,0,0,.05);
  --light-white: rgba(255,255,255,.03);
  
  /* Set img filter for dark theme */
  --img: invert(1);
  --avatar-shadow: rgba(28,22,47,.3);
  
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  /* Optimize transitions to not interfere with scrolling */
  transition: color .1s ease, background-color .1s ease, border-color .1s ease, opacity .1s ease;
}

html{
    scroll-behavior: smooth;
    /* Mobile scrolling optimizations */
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
    overscroll-behavior: contain;
    /* Improve text rendering on mobile */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

body {
  font-family: 'Inter', sans-serif;
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Mobile scrolling optimizations */
  -webkit-overflow-scrolling: touch;
  touch-action: manipulation;
  overscroll-behavior: contain;
  /* Prevent horizontal scrolling issues on mobile */
  overflow-x: hidden;
  /* Improve performance on mobile */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

a{
  color: ${({ theme }) => theme.text.primary};
}

.main{
    min-height: 100vh;
}

.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.nft-clipped{
  clip-path: url(#hex);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.oval-clipped{
  clip-path: url(#oval);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

export default GlobalStyle;
import styled from 'styled-components'
import ReactDOM from 'react-dom';

export default function Layout({ children }) {
    return (
        <Main >
            {children}
        </Main>
    )
}

const Main = styled.main`
  min-height: 100vh;
  background: url("/header-gradient.svg") no-repeat top center, url("/footer-gradient.svg") no-repeat bottom center;
  background-size: 100%, auto;
  /* Remove fixed attachment that causes mobile scrolling issues */
  background-attachment: scroll;
  /* Improve performance with hardware acceleration */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: auto;
  
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 250%, auto;
    background-position: top center, bottom center;
    /* Additional mobile optimizations */
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }
`;

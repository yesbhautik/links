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
  background-attachment: scroll; /* Changed from fixed to scroll for better performance */
  will-change: transform; /* Add hardware acceleration */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 200%, auto; /* Reduced from 250% to 200% for better performance */
    background-position: top center, bottom center;
  }
`;

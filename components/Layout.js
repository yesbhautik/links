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
  background: url("/header-gradient.svg") no-repeat top center, url("/footer-gradient.svg") no-repeat bottom center; /* Top and bottom backgrounds */
  background-size: 100%, auto; /* Top background covers full width, bottom background auto */
  background-attachment: fixed;
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    background-size: 250%, auto; /* Adjusts size for smaller screens */
    background-position: top center, bottom center; /* Centered at the top and bottom for smaller screens */
  }
`;

import styled from 'styled-components'

export default function SmallFooter() {
  return (
    <Footer>
      <p>&copy; 2021 <span>Calebbenjin.</span> All Rights Reserved.</p>
    </Footer>
  )
}


const Footer = styled.footer`
  padding: 3rem 0;
  margin-top: 3rem;
  margin-bottom: 8rem;
  border-top: solid 1px ${(props) => props.theme.colors.greyColor};
  p {
    font-size: 1.3rem;
  }
  span {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: 900;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-top: 2rem;
    /* margin-bottom: 1rem; */
  }
`;
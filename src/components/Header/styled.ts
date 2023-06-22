import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 296px;

  background-color: ${(props) => props.theme.base_profile};

  img:nth-child(2) {
    display: flex;
    flex-direction: row;
    padding-bottom: 8rem;
  }
`

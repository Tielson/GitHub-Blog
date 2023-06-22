import styled from 'styled-components'

export const PageInfoContainer = styled.section`
  width: 86.4rem;
  margin: 0 auto 100px;
`

export const Content = styled.main`
  font-size: 70%;
  padding: 0 32px;
  margin-top: -43px;
  p {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 160%;
    line-height: 1.5;
    img {
      width: 65%;
    }
  }
  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme.base_title};

    flex: none;
    order: 0;
    align-self: stretch;
  }
`

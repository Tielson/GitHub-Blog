import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 86.4rem;
  margin: 0 auto 100px;
`
export const SearchContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    flex: 1;
    padding: 12px 16px;
    height: 50px;
    background: ${(props) => props.theme.base_input};

    border: 1px solid ${(props) => props.theme.base_border};
    border-radius: 6px;
    color: ${(props) => props.theme.base_title};
  }
`
export const PostContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  img {
    display: none;
  }

  .headerPost {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`
export const Post = styled.button`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: stretch;
  inset: 0;

  width: 416px;
  height: 260px;

  background: ${(props) => props.theme.base_post};
  border-radius: 10px;
  padding: 3.2rem;

  h1 {
    font-size: 20px;
    line-height: 160%;
    font-weight: 700;
    color: ${(props) => props.theme.base_title};
    max-width: 283px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    color: ${(props) => props.theme.base_span};
  }

  h3 {
    font-size: 16px;

    color: ${(props) => props.theme.base_span};
    overflow-y: hidden;
    height: 112px;
  }

  &:hover {
    background-color: ${(props) => props.theme.base_label};
    border: 1px solid ${(props) => props.theme.base_span};
  }
`

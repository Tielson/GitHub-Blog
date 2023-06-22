import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: auto;
  width: 864px;
  height: 212px;
  position: relative;
  display: flex;
  align-items: center;
  top: -9rem;
  background: ${(props) => props.theme.base_profile};
  border-radius: 10px;
  padding: 0 40px;
  gap: 3.2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  img {
    width: 14.8rem;
    height: 14.8rem;
    left: 4rem;
    top: calc(50% - 14.8rem / 2);
    border-radius: 0.8rem;
  }
`
export const InfoContainer = styled.div`
  .fistDiv {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.blue};
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;

      svg {
        color: ${(props) => props.theme.blue};
      }
    }
  }

  .secondDiv {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 2.4rem;
  }
  .lastDiv {
    gap: 2.4rem;
    display: flex;

    div {
      display: flex;
      gap: 8px;
      svg {
        color: ${(props) => props.theme.base_label};
      }
    }
  }
  .port {
    a {
      color: ${(props) => props.theme.base_title};
    }
  }
`

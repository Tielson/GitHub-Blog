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
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .fistDiv {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;

    div {
      display: flex;
      justify-content: space-between;
    }

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
    color: ${(props) => props.theme.base_label};

    div {
      display: flex;
      gap: 8px;
    }
  }
`

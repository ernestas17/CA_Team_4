import styled from 'styled-components';

export const StyledServicesCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 424px;
  height: 424px;

  background: #ffffff;
  border: solid 1px #ebebeb;
  margin-bottom: 64px;
  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);

  img {
    margin-top: 88px;
  }

  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;

    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
    margin-top: 24px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 175%;
    width: 295px;

    text-align: center;

    color: #232536;

    opacity: 0.6;

    margin-top: 16px;
    margin-bottom: 88px;
  }
`;

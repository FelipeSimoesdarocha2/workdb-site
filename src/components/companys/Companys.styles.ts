import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 36px;

  h1 {
    color: #105c86;
    font-size: 30px;
    font-family: 'poppins-semibold', poppins, sans-serif;

    @media (max-width: 750px) {
      font-size: 24px;
    }
  }
`;

export const Carrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 186px;
  margin: 0 0 65px;
  background-color: rgb(219, 219, 219, 1);

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 980px;
    position: relative;
  }

  button:first-child {
    margin: 0 66px;
    position: absolute;
    left: 0;
  }

  button:last-child {
    position: absolute;
    right: 0;
    transform: rotate(-180deg);
    margin: 0 66px;
  }

  @media (max-width: 560px) {
    button {
      display: none;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Item = styled.div`
  @media (max-width: 750px) {
    img {
      width: 60px;
    }
  }
`;

import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 107px 0 120px;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin: 67px 0 120px;
  }

  @media (max-width: 560px) {
    gap: 37px;
    margin: 40px 0 40px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 541px;
  max-height: 305px;

  @media (max-width: 560px) {
    min-width: auto;

    .startup {
      max-width: 217px;
    }
  }

  #image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: -22px;
    z-index: 42;

    @media (max-width: 560px) {
      bottom: -9px;
    }
  }

  #image_container img {
    position: absolute;
    width: 100%;
  }

  img {
    border-radius: 4px;
    z-index: 1;

    @media (max-width: 560px) {
      border-radius: 8px;
    }
  }

  .line {
    position: absolute;
    bottom: 24px;
    left: -47px;
    right: 32px;
    top: -22px;
    border-radius: 0px 30px 0px 30px;
    border: 2px solid rgba(0, 181, 219, 1);

    @media (max-width: 560px) {
      left: -24px;
      right: 20px;
    }
  }
`;

export const History = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 644px;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    justify-content: center;
    padding: 0 22px;
  }

  h1 {
    color: #00b5db;
    font-size: 29px;
    font-family: 'poppins', sans-serif;

    @media (max-width: 560px) {
      font-size: 19px;
      width: 100%;
    }
  }

  p {
    flex-wrap: wrap;
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.4em;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: calc(10vw);
  height: 662px;
  background-image: radial-gradient(
      circle at 94.35384114583333% 89.61588541666666%,
      #105c86 0%,
      20%,
      rgba(16, 92, 134, 0) 40%
    ),
    radial-gradient(
      circle at 6.503906249999999% 88.037109375%,
      rgba(0, 175, 211, 0.99) 0%,
      20.950000000000003%,
      rgba(0, 175, 211, 0) 50%
    ),
    radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105c86 0%, 84.6%, rgba(16, 92, 134, 0) 100%),
    radial-gradient(circle at 93.6865234375% 11.42578125%, #2db6d4 0%, 42%, rgba(45, 182, 212, 0) 70%),
    radial-gradient(circle at 48.9013671875% 49.521484375%, #dbdbdb 0%, 100%, rgba(219, 219, 219, 0) 100%);
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
`;

export const HyperText = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
  }

  h1 {
    font-size: 83px;
    color: rgb(0, 175, 211);
    line-height: 0.9em;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  max-width: 462px;

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 200;
  }

  text {
    font-weight: 500;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 460px;
`;

export const Values = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Action = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 36px;
  background-color: rgba(0, 181, 219, 1);
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 92, 134, 1);
    transition: background-color 0.3s ease;
    box-shadow: none;
  }

  &:active {
    transition: all 0.3s ease;
    transform: scale(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    /* background-color: #e0e0e0; */
  }

  &:disabled:active {
    transform: scale(1);
  }

  &:not(&:disabled) {
    background-color: rgba(0, 181, 219, 1);
  }

  &:disabled p {
    /* color: #a6a6a6; */
  }

  p {
    color: rgba(250, 250, 250);
    font-size: 18px;
  }

  p::selection {
    background: none;
  }
`;

export const Local = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: rgb(16, 92, 134);
    font-size: 28px;
    font-weight: 400;
  }

  h1 {
    font-size: 83px;
    color: rgb(0, 175, 211);
    line-height: 0.7em;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  span h1 {
    color: #105c86;
    font-size: 24px;
  }

  span h2 {
    color: #105c86;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Maps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  iframe {
    border: none;
    border-radius: 5px;
  }

  iframe:hover {
    box-shadow: 0px 4px 5px 0px #cccccc;
  }

  h1 {
    color: #105c86;
    font-size: 24px;
    font-weight: 600;
  }
`;

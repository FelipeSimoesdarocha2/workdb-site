import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #235c88;
  border-right: 1px solid #e9ebf1;
  box-shadow: 0px 8px 10px 3px #0000001a;
  z-index: 100;
  transition: all 500ms ease-out;

  &.active {
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition: all 750ms;

    > div {
      filter: blur(2rem);
      transition: all 1s;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  max-width: 1160px;
`;

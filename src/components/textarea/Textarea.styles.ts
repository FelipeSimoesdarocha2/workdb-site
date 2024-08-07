import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
  caret-color: #fff;

  label {
    display: flex;
    align-items: center;
    gap: 4px;

    color: #fafafa;
    font-size: 17px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.15px;

    &.required::after {
      content: ' *';
      color: #87868a;
    }
  }

  textarea {
    color: #fff;
    font-size: 14px;
    padding: 3px 6px;
    width: 100%;
    height: 37px;
    max-width: 460px;
    min-height: 86px;

    background-color: #467ea0;
    border-radius: 0 10px 0 10px;
    overflow: hidden;
    resize: none;
  }

  &.required {
    textarea {
      border: 1px solid #c31212;
    }
  }

  &.focused {
    textarea {
      background-color: #2a6285;
      border: 1px solid #457b9a;
    }
  }
`;

import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282a2c;
  margin: 0 auto;
  height: auto;
  border-radius: 30px;
  width: 800px;
  padding-bottom: 5px;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 15%;
  margin-right: 10px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 22px;

    &:hover {
        background-color: #3f3f3f;
        border-radius: 80%;
    }
`;
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 100%;
  max-height: 200px;
  min-height: 20px; /* Adjust for one line */
  height: auto;
  border: none;
  resize: none;
  font-size: 16px;
  padding: 15px 0px 0px 15px;
  background-color: #282a2c;
  color: #e3e3e3;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`;


export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end; 
  max-width: 1000px; 
  border-radius: 30px;
  padding: 5px 15px;
  background-color: #282a2c;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 auto;
`;


export const TextAreaContainer = styled.div`
  width: 85%;
  overflow: hidden;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 15%;
  padding: 10px 0;
`;

export const Button = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        background-color: #3f3f3f;
        border-radius: 80%;
    }
`;
import styled from 'styled-components';

export const SidebarContainer = styled.aside.withConfig({
    shouldForwardProp: (prop) => prop !== 'isCollapsed'
  })`
    width: ${props => props.isCollapsed ? '80px' : '300px'};
    background-color: #1e1f20;
    height: 100vh;
    transition: width 0.3s ease;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 50px;
    padding: 20px;

    @media (max-width: 768px) {
        width: ${props => props.isCollapsed ? '60px' : '200px'};
    }
`

export const ToggleButton = styled.div`
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 25px;
    margin-left: 4px;

    &:hover {
        color: #aaa;
    }
`

export const NewChatButton = styled.div`
    background-color: #282a2c;
    color: white;
    padding: 12px 15px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    margin-left: -3px;

    &:hover {
        background-color: #333435;
    }
`

export const NewChatText = styled.span`
    margin-left: 25px;
`

export const ChatIconContainer = styled.div`
  margin-top: 7px;
  font-size: 16px;
`

export const ChatTitleContainer = styled.div`
  width: 195px;
  height: 24px;
  overflow: hidden;
  span {
    font-size: 14px;
  }
`

export const ChatContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected'
  })`
    background-color: ${props => props.isSelected ? '#004a76' : ''};
    display: flex;
    gap: 18px;
    flex-direction: row;
    border-radius: 20px;
    padding: 5px 20px;
    width: 100%;

    &:hover {
        background-color: ${props => !props.isSelected ? '#282a2c' : ''};
    }

    &:hover .chat-options {
        opacity: 1;
    }   
`

export const ChatoptionsButtonContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected'
  })`
    margin-top: 3px;
    font-size: 12px;
    padding: 6px;
    opacity: 1;
    transition: opacity 0.2s ease;

    &:hover {
        background-color: ${props => props.isSelected ?  '#002653' : '#1e1f20'};
        border-radius: 50%;
    }
`

export const ChatOptionsContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'options'
})`
  visibility: visible;
  position: fixed;
  left: 10;
  top: 50;
  z-index: 1000;
  height: 120px;
  width: 120px;
  background-color: #2f2f2f;
`

export const ChatOptionIconContainer = styled.div`
  font-size: 16px;
`

export const ChatOptionTitleContainer = styled.div`

`

export const ChatOption = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`
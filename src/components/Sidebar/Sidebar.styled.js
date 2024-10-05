import styled from 'styled-components';

export const SidebarContainer = styled.aside.withConfig({
    shouldForwardProp: (prop) => prop !== 'isCollapsed'
  })`
    width: ${props => props.isCollapsed ? '80px' : '250px'};
    background-color: #1e1f20;
    height: 100vh;
    transition: width 0.3s ease;
    flex-shrink: 0;
    display: flex;

     @media (max-width: 768px) {
        width: ${props => props.isCollapsed ? '60px' : '200px'};
    }
`

export const ToggleButton = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 25px;

    &:hover {
        color: #aaa;
    }
`

export const NewChatButton = styled.div`
    background-color: #282a2c;
    color: white;
    position: absolute;
    top: 100px;
    left: 15px;
    padding: 12px 15px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #333435;
    }
`

export const NewChatText = styled.span`
    margin-left: 25px;
`
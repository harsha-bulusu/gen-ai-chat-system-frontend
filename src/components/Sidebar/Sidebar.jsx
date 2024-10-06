import React, { useEffect, useState } from 'react';
import { NewChatButton, NewChatText, SidebarContainer, ToggleButton } from './Sidebar.styled';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

export default function Sidebar () {
    const [isCollapsed, setCollapsed] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCollapsed(true)
            } else {
                setCollapsed(false)
            }
        }
        
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleToggle = () => {
        setCollapsed(!isCollapsed)
    }

    return (
        <SidebarContainer isCollapsed={isCollapsed}>
            <ToggleButton onClick={handleToggle}>
                <GiHamburgerMenu />
            </ToggleButton>
            
            <NewChatButton>
                <FaPlus />
                {!isCollapsed ? <NewChatText>New chat</NewChatText> : null}
            </NewChatButton>
        </SidebarContainer>
    )
}
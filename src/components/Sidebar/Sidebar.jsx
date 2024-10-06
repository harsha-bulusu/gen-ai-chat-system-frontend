import React, { useCallback, useEffect, useState } from 'react';
import { ChatContainer, ChatIconContainer, ChatoptionsButtonContainer, ChatOptionsContainer, ChatOptionIconContainer, ChatOptionTitleContainer, ChatTitleContainer, NewChatButton, NewChatText, SidebarContainer, ToggleButton, ChatOption } from './Sidebar.styled';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';
import { IoChatboxOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import Tooltip from '@mui/material/Tooltip';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Modal from '@mui/material/Modal';

export default function Sidebar () {
    const [isCollapsed, setCollapsed] = useState(false);
    const [startValue, setStartValue] = useState(0)
    const [endValue, setEndValue] = useState()
    const [history, setHistory] = useState([])
    const [selectedConversation, setSelectedConversation] = useState(null)
    const [options, setOptions] = useState({
        open: false,
        left: '0px',
        right: '0px'
    })

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

    const getHistory = useCallback(() => {
        axios.get("http://localhost:8080/history")
        .then(dt => {
            setHistory([...history, ...dt.data])
        })
        .catch(err => console.log(err))
    }, [history])

    useEffect(() => {
        getHistory()
    }, [])

    const handleToggle = () => {
        setCollapsed(!isCollapsed)
    }

    const formatListItem = (text) => {
        return text.length > 20 
        ? `${text.substring(0, 17)}...`
        : text
    }

    const handleSelectedConversation = id => {
        setSelectedConversation(id)
    }

    const handleNewChat = () => {
        setSelectedConversation(null)
    }

    const handleChatOptions = e => {
        e.stopPropagation()
        const {clientX, clientY} = e
        console.log(clientX, clientY)
        setOptions({...options, open: true, left: clientX + 20, top: clientY + 10})
    }

    return (
        <SidebarContainer isCollapsed={isCollapsed}>
            <ToggleButton onClick={handleToggle}>
                <GiHamburgerMenu />
            </ToggleButton>
            
            <NewChatButton onClick={handleNewChat}>
                <FaPlus />
                {!isCollapsed ? <NewChatText>New chat</NewChatText> : null}
            </NewChatButton>

            {!isCollapsed ? 
                <div>
                    <h3>Recent</h3>
                    <div>
                    <List 
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            overflowY: 'scroll',
                            maxHeight: 400,
                            backgroundColor: 'transparent',
                            '& ul': { padding: 0 },
                        }}
                        className='history-list'
                    >
                        {history.map((item) => {
                            return <ListItem key={item.id} style={{cursor: 'pointer', padding: '3px'}} onClick={() => handleSelectedConversation(item.id)}>
                                <ChatContainer isSelected={item.id === selectedConversation}>
                                    <ChatIconContainer>
                                        <IoChatboxOutline />
                                    </ChatIconContainer>
                                    <ChatTitleContainer>
                                        <Tooltip title={item.title}>
                                            <ListItemText>
                                                {formatListItem(item.title)}
                                            </ListItemText>
                                        </Tooltip>
                                    </ChatTitleContainer>
                                    <Tooltip title={'options'}>
                                        <ChatoptionsButtonContainer className='chat-options'
                                            onClick={handleChatOptions}
                                            isSelected={item.id === selectedConversation}>
                                            <SlOptionsVertical />
                                        </ChatoptionsButtonContainer>
                                    </Tooltip>
                                </ChatContainer>
                            </ListItem>
                    })}
                    </List></div>
                </div> : null}

                <Modal open={options.open}
                onClose={() => setOptions({...options, open: false})}
                style={{width: '120px', backgroundColor: '#2f2f2f', height: '120px', color: '#fff', outline: 'none', position: 'absolute', left: options.left, top: options.top,
                    borderRadius: '20px'
                }}>
                <ChatOptionsContainer>
                        <ChatOption>
                            <ChatOptionIconContainer>
                                <CiEdit />
                            </ChatOptionIconContainer>
                            <ChatOptionTitleContainer>
                                <ListItemText>Rename</ListItemText>
                            </ChatOptionTitleContainer>
                        </ChatOption>

                        <ChatOption style={{color: 'red'}}>
                            <ChatOptionIconContainer>
                                <RiDeleteBin6Line />
                            </ChatOptionIconContainer>
                            <ChatOptionTitleContainer>
                                <ListItemText>Delete</ListItemText>
                            </ChatOptionTitleContainer>
                        </ChatOption>
                </ChatOptionsContainer>
                </Modal>
        </SidebarContainer>
    )
}
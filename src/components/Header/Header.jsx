import React, { useState } from 'react';
import { HeaderContainer, HeaderOptionsContainer, LogoContainer, LogoImage, LogoTitle, ProfileContainer, ThemeSwitchContainer, UserProfileOption, UserProfileOptionIcon, UserProfileOptionscontainer, UserProfileOptionTitle } from './Header.styled';
import { FaUserCircle } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { Modal, Tooltip } from '@mui/material';
import { CiSettings } from "react-icons/ci";
import { IoPower } from "react-icons/io5";

export default function Header () {

    const [showOptions, setshowOptions] = useState({
        visible: false,
        left: 0,
        top: 0
    })

    const handleClick = (e) => {
        const {clientX, clientY} = e;
        setshowOptions({
            visible: true,
            left: clientX - 90,
            top: clientY + 20
        })
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoImage src="vaidya-logo.png" />
                <LogoTitle>Vaidya AI</LogoTitle>
            </LogoContainer>
            <HeaderOptionsContainer>
                <Tooltip title={"Light Mode"}>
                    <ThemeSwitchContainer>
                        <LuSunMedium />
                    </ThemeSwitchContainer>
                </Tooltip>
                <Tooltip title={"User Profile"}>
                    <ProfileContainer onClick={handleClick}>
                        <FaUserCircle />
                    </ProfileContainer>
                </Tooltip>
            </HeaderOptionsContainer>

            <Modal open={showOptions.visible}
                className='header-options-modal'
                onClose={() => setshowOptions({...showOptions, visible: false})}
                style={{width: '120px', backgroundColor: '#2f2f2f', height: '120px', color: '#fff', outline: 'none', position: 'absolute', left: showOptions.left, top: showOptions.top,
                    borderRadius: '20px'
                }}>
                    <UserProfileOptionscontainer>
                        <UserProfileOption>
                            <UserProfileOptionIcon>
                                <CiSettings />
                            </UserProfileOptionIcon>
                            <UserProfileOptionTitle>
                                Settings
                            </UserProfileOptionTitle>
                        </UserProfileOption>
                        <UserProfileOption style={{color: 'red'}}>
                            <UserProfileOptionIcon>
                                <IoPower />
                            </UserProfileOptionIcon>
                            <UserProfileOptionTitle>
                                Logout
                            </UserProfileOptionTitle>
                        </UserProfileOption>
                    </UserProfileOptionscontainer>
                </Modal>
        </HeaderContainer>
    )
}
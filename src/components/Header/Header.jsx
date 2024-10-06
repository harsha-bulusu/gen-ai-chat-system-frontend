import React from 'react';
import { HeaderContainer, HeaderOptionsContainer, LogoContainer, LogoImage, LogoTitle, ProfileContainer, ThemeSwitchContainer } from './Header.styled';
import { FaUserCircle } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function Header () {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoImage src="vaidya-logo.png" />
                <LogoTitle>Vaidya AI</LogoTitle>
            </LogoContainer>
            <HeaderOptionsContainer>
                <ThemeSwitchContainer>
                    <LuSunMedium />
                </ThemeSwitchContainer>
                <ProfileContainer>
                    <FaUserCircle />
                </ProfileContainer>
            </HeaderOptionsContainer>
        </HeaderContainer>
    )
}
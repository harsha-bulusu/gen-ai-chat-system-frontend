import React from 'react';
import Header from '../Header';
import Content from '../Content';
import { MainContainer } from './Main.styled';
import PromptWrapper from '../PromptWrapper';

export default function Main () {
    return (
        <MainContainer>
            <Header/>
            <Content />
            <PromptWrapper />
        </MainContainer>
    )
}   
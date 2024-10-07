import styled from 'styled-components';

export const AuthenticationCardContainer = styled.div`
    width: 400px;
    height: 350px;
    margin: 0 auto;
    background-color: #131314;
    border: none;
    outline: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    border-radius: 30px;
`

export const GoogleAuthContainer = styled.div`
`

export const MicrosoftAuthContainer = styled.div`
`

export const OtpAuthcontainer = styled.div`
    cursor: default;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
    padding: 10px 0px;
`

export const AuthIconContainer = styled.div`
`

export const AuthTitleContainer = styled.div`
`

export const InputEmailContainer = styled.div`
    width: 80%;
    label {
        color: #fff;
    }
    
    .MuiFilledInput-input {
        color: #fff;
    }

    .MuiFilledInput-root {
        background-color: #131314 !important;
        border-radius: 20px;
    }

    .Mui-focused {
        color: #fff !important;
    }
`

export const InputOtpContainer = styled.div`

    .MuiFormControl-root {
        background-color: #131314 !important;
        border: none;
    }

    .MuiOtpInput-Box {
        padding: 10px;
        gap: 15px;
    }

    .MuiOutlinedInput-root {
        color: #fff !important;
    }
`

export const OTPButtonContainer = styled.div`
`

export const OtpAuthWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`
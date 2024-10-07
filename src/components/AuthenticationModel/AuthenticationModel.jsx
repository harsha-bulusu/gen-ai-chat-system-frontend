import { Button, FilledInput, FormControl, Input, InputLabel, Modal, SvgIcon, TextField } from "@mui/material";
import { AuthenticationCardContainer, AuthenticationTitle, AuthenticationTitleWrapper, AuthIconContainer, AuthTitleContainer, GoogleAuthContainer, InputEmailContainer, InputOtpContainer, MicrosoftAuthContainer, OtpAuthcontainer, OtpAuthWrapper, OTPButtonContainer } from "./AuthenticationModel.styled";
import { useRef, useState } from "react";
import { MuiOtpInput } from 'mui-one-time-password-input'

export default function AuthenticationModel (props) {

    const {modelOpen} = props
    const emailRef = useRef(null)
    const [error, setError] = useState('')
    const [otpRequested, setOtpRequested] = useState(false)
    const [otp, setOtp] = useState('')

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return false;
          } else {
            setError('');
            return true;
          }
    }

    const requestOtp = () => {
        setOtpRequested(true)
        console.log('otpRequested')
        // code for requesting otp
        // onSuccess
        // setTimeout(() => {
        //     otpRequested(false)
        // }, 12000)
    }

    const handleOTPRequest = () => {
        if (emailRef.current) {
            const isValid = validateEmail(emailRef.current.children[0]?.value);
            if (isValid) {
                requestOtp();
            }
        }
    }

    const handleOtpInput = newValue => {
        setOtp(newValue)
    }

    const verifyOtp = () => {

    }

    const handleBtnClick = () => {
        if (!otpRequested) {
            handleOTPRequest()
        } else {
            verifyOtp()
        }
    }

    return (
        <Modal open={modelOpen}
            style={{
                height: '100vh',
                width: '100vw',
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
            }}
        >
            <AuthenticationCardContainer>
                <AuthenticationTitleWrapper>
                    <AuthenticationTitle>
                        Welcome, Please Sign in!
                    </AuthenticationTitle>
                </AuthenticationTitleWrapper>
                <GoogleAuthContainer className="auth-options">
                    <AuthIconContainer>
                        <img src="google.svg" height={20} width={20}/>
                    </AuthIconContainer>
                    <AuthTitleContainer>
                        Sign in with Google
                    </AuthTitleContainer>
                </GoogleAuthContainer>

                <MicrosoftAuthContainer className="auth-options">
                    <AuthIconContainer>
                        <img src="ms-icon.svg" height={20} width={20}/>
                    </AuthIconContainer>
                    <AuthTitleContainer>
                        Sign in with Microsoft
                    </AuthTitleContainer>
                </MicrosoftAuthContainer>

                <OtpAuthcontainer className="auth-options">
                    <OtpAuthWrapper>
                        <AuthIconContainer>
                        <img src="otp.svg" height={20} width={20}/>
                        </AuthIconContainer>
                        <AuthTitleContainer>
                            Sign in with OTP
                        </AuthTitleContainer>
                    </OtpAuthWrapper>
                    {!otpRequested
                    ? <InputEmailContainer>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <InputLabel >Enter your email</InputLabel>
                            <FilledInput ref={emailRef} disableUnderline />
                            {error.length > 0 ? <p style={{fontSize: "12px", color: "red"}}>{error}</p> : null}
                        </FormControl>
                    </InputEmailContainer>
                    :  <InputOtpContainer>
                            <MuiOtpInput value={otp} length={6} onChange={handleOtpInput}/>
                            <p style={{fontSize: "12px", color: "#fff", margin: '5px'}}>The OTP expires in 2 minutes</p>
                            {error.length > 0 ? <p style={{fontSize: "12px", color: "red"}}>{error}</p> : null}
                        </InputOtpContainer>
                    }
                    <OTPButtonContainer>
                        <Button variant="contained" onClick={handleBtnClick}>
                            {!otpRequested ? 'Request OTP' : 'Verify OTP'}
                        </Button>
                    </OTPButtonContainer>
                </OtpAuthcontainer>
            </AuthenticationCardContainer>
        </Modal>
    )
}
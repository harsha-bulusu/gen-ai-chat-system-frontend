import { useRef } from "react";
import { Button, ButtonGroupContainer, StyledTextArea, TextAreaContainer, TextAreaWrapper } from "./TextArea.styled";
import { IoIosMic } from 'react-icons/io'
import { IoMdAttach } from 'react-icons/io'
import { IoMdSend } from 'react-icons/io'

export default function TextArea () {
    const textAreaRef = useRef(null);

    const handleInput = (e) => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'; 
            const newHeight = Math.max(e.target.scrollHeight, 10);
            textAreaRef.current.style.height = `${newHeight}px`;
        }
    }

    return (
        <TextAreaWrapper>
            <TextAreaContainer>
                <StyledTextArea ref={textAreaRef} onInput={handleInput} placeholder="Enter a Prompt" />
            </TextAreaContainer>
            <ButtonGroupContainer>
            <Button>
                    <IoIosMic />
                </Button>
                <Button>
                    <IoMdAttach />
                </Button>
                <Button>
                    <IoMdSend />
                </Button>
            </ButtonGroupContainer>
        </TextAreaWrapper>
    );
}

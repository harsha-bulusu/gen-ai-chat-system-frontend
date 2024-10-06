import { Button, ButtonGroupContainer, TextAreaWrapper } from "./TextAreaWithBtn.styled";
import { IoIosMic } from 'react-icons/io'
import { IoMdAttach } from 'react-icons/io'
import { IoMdSend } from 'react-icons/io'
import { TextareaAutosize } from "@mui/material";

export default function TextArea () {

    return (
        <TextAreaWrapper>
            <TextareaAutosize maxRows={10} minRows={1} className="prompt-area" placeholder="Enter a prompt here"/>
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

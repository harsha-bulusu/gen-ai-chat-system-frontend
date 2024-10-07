import { ContentContainer, MessageContainer, MessageContainerWrapper,
     MessageOption, MessageOptionsContainer, WelcomeMessage } from "./Content.styled";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoShareOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";


export default function Content () {
    return (
        <ContentContainer>
            {/* <WelcomeMessage>
                Hello, How can I help you?
            </WelcomeMessage> */}
            <MessageContainerWrapper>
                <MessageContainer>
                In Kotlin, you still define a class like KotlinRedisApplication for a couple of reasons, even though the main function isn't inside the class body itself:

                Why Do We Need a Class?
                Spring Boot Annotation: The class annotated with @SpringBootApplication is necessary because Spring Boot needs a class as an entry point to initialize the application context. The annotation tells Spring Boot to perform tasks like component scanning and auto-configuration.

                Configuration and Beans: The class can hold additional Spring configuration or be used to define beans if necessary. Even though the main function is not part of this class, the class serves as a central place for application setup and configuration.

                Is the main Function Part of the Class?
                No, the main function is not part of the class in your example. In Kotlin, top-level functions like main are independent and are not tied to a specific class. The main function here is defined at the file level, outside the class. When the runApplication(*args) is called, it uses the class KotlinRedisApplication as a Spring Boot configuration class, but the function itself is not within the class.

                Summary
                The class KotlinRedisApplication is required for Spring Boot to handle application setup.
                The main function is not part of the class; it’s a top-level function in Kotlin.
                The separation between the class and the main function is idiomatic in Kotlin and offers cleaner, more flexible code.
                </MessageContainer>
                <MessageOptionsContainer>
                    <MessageOption>
                        <HiOutlineSpeakerWave />
                    </MessageOption>
                    <MessageOption>
                        <IoCopyOutline />
                    </MessageOption>
                    <MessageOption>
                        <IoShareOutline />
                    </MessageOption>
                    <MessageOption>
                        <BiLike />
                    </MessageOption>
                    <MessageOption>
                        <BiDislike />    
                    </MessageOption>
                </MessageOptionsContainer>
            </MessageContainerWrapper>
        </ContentContainer>
    )
}
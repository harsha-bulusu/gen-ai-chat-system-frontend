import { useEffect, useState } from "react";
import AuthenticationModel from "../AuthenticationModel";

export default function AuthenticationWrapper({ children }) {

    const [modelOpen, setModelOpen] = useState(false)


    useEffect(() => {
        if (localStorage.getItem('authenticated') === null) {
            setModelOpen(true)
        }
        setModelOpen(true)
    }, [])

    return (
        <>
            <AuthenticationModel modelOpen={modelOpen} setModelOpen={setModelOpen} />
            {children}
        </>
    )
}
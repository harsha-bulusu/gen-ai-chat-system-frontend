import { useEffect, useState } from "react";
import AuthenticationModel from "../AuthenticationModel";
import { isAuthenticated } from "../../util/AuthUtils";

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
            {!isAuthenticated() ? <AuthenticationModel modelOpen={modelOpen} setModelOpen={setModelOpen} /> : null}
            {children}
        </>
    )
}
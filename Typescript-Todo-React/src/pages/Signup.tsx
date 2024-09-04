// IMPORTS
// Styles 
import "./Signup.css"
// React
import { useState } from "react";

// TYPES    
interface LoginFormData {
    email: string
    password: string
}
interface SignupFormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

//COMPONENT 
export const Signup = () => {

    // States 
    const [signupState, setSignupState] = useState(true);
    const [signupFormData, setSignupFormData] = useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    // On Chnage Handlers 
    const updateSignupData = (e: { target: { id: string; value: string; }; }) => {
        console.log(e.target.id);
        setSignupFormData(
            (prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            }))
    }
    const updateLoginData = (e: { target: { id: string; value: string; }; }) => {
        console.log(e.target.id);
        setLoginFormData(
            (prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            }))
    }

    // Button handlers 
    const handleChangeForm = () => {
        console.log("changign form")
        setSignupState(prev => !prev)
    }

    const submitSignUp = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(signupFormData)
    }

    const submitLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(loginFormData)
    }

    return (
        <div className="Signup">
            <div className="Toggle">
                <div onClick={handleChangeForm} className={signupState ? "Left-Selected" : "Left"} >Sign up</div>
                <div onClick={handleChangeForm} className={signupState ? "Right" : "Right-Selected"} >Log in</div>
            </div>

            {signupState ? (
                <form
                    onSubmit={submitSignUp}
                    className="SignupForm">
                    <input
                        id="name"
                        value={signupFormData.name}
                        onChange={updateSignupData}
                        placeholder="Name"
                        required
                    />
                    <input
                        id="email"
                        value={signupFormData.email}
                        onChange={updateSignupData}
                        type="Email"
                        placeholder="Email"
                        required
                    />
                    <input
                        id="password"
                        value={signupFormData.password}
                        onChange={updateSignupData}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <input
                        id="confirmPassword"
                        value={signupFormData.confirmPassword}
                        onChange={updateSignupData}
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                    <button
                        type="submit">
                        Sign up
                    </button>
                    <button
                        type="button">
                        Demo Account
                    </button>
                </form>
            )
                : (
                    <form
                        onSubmit={submitLogin}
                        className="LoginForm">
                        <input
                            id="email"
                            value={loginFormData.email}
                            onChange={updateLoginData}
                            type="Email"
                            placeholder="Email"
                            required
                        />
                        <input
                            id="password"
                            value={loginFormData.password}
                            onChange={updateLoginData}
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="submit">
                            Log in
                        </button>
                    </form>
                )}

        </div>
    )
}
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useSignupUserMutation } from "../services/authAPI";

function SignUp() {
    const [cookies, setCookie] = useCookies(null); // eslint-disable-line no-unused-vars
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [signupUser, { data, isLoading, isSuccess }] = useSignupUserMutation();

    React.useEffect(() => {
        if (data) {
            if (data.detail) setError(data.detail);
            else {
                setCookie("email", data.email);
                setCookie("token", data.token);
            }
        }
    }, [isSuccess]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
            if (password !== confirmPassword) throw new Error("Passwords do not match!");
            if (!email || !password) throw new Error("Email and password cannot be empty!");
            await signupUser({ email, password });
        } catch (err) {
            setError(err.message);
        }
    };
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    return (
        <div className="sign-up">
            <form onSubmit={handleFormSubmit}>
                <input name="email" type="email" value={form.email} placeholder="email" onChange={handleFormChange} autoComplete="email" required />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder="password"
                    onChange={handleFormChange}
                    autoComplete="current-password"
                    required
                />
                <input
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    placeholder="confirm password"
                    onChange={handleFormChange}
                    autoComplete="confirmPassword"
                    required
                />
                {!isLoading ? <button type="submit">Sign Up</button> : "Singing up..."}
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default SignUp;

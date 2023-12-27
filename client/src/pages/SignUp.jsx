import React, { useState } from "react";
import { useCookies } from "react-cookie";

function SignUp() {
    const [cookies, setCookie] = useCookies(null); // eslint-disable-line no-unused-vars
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) setError("Passwords do not match");
        setForm({ email, password, confirmPassword });
        const res = await fetch(`${process.env.REACT_APP_SERVER}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.detail) setError(data.detail);
        else {
            setCookie("email", data.email);
            setCookie("token", data.token);
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
                <button type="submit">Sign Up</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default SignUp;

import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Counter from "../features/counter/Counter";

function SignIn() {
    const [cookies, setCookie] = useCookies(null); // eslint-disable-line no-unused-vars
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const res = await fetch(`${process.env.REACT_APP_SERVER}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.detail) setError(data.detail);
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
        <div className="sign-in">
            <form onSubmit={handleFormSubmit}>
                <input name="email" type="email" value={form.email} placeholder="email" onChange={handleFormChange} required />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder="password"
                    onChange={handleFormChange}
                    required
                    autoComplete="current-password"
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <div className="error">{error}</div>}
            <Counter />
        </div>
    );
}

export default SignIn;

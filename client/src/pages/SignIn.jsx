import React, { useState } from "react";

function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    // const [error, setError] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
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
            {/* {error && <div className="error">{error}</div>} */}
        </div>
    );
}

export default SignIn;

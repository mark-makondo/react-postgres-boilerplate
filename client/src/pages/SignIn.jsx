import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Counter from "../features/counter/Counter";
import { useSigninUserMutation } from "../services/authAPI";

function SignIn() {
    const [cookies, setCookie] = useCookies(null); // eslint-disable-line no-unused-vars
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [signinUser, { data, isLoading, isSuccess }] = useSigninUserMutation();

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
            if (!email || !password) throw new Error("Email and password cannot be empty!");
            await signinUser({ email, password });
        } catch (err) {
            setError(err.message);
        }
    };
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    return (
        <div className="sign-in">
            <form onSubmit={handleFormSubmit}>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    placeholder="email"
                    onChange={handleFormChange}
                    autoComplete="username"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    placeholder="password"
                    onChange={handleFormChange}
                    autoComplete="current-password"
                    required
                />
                {!isLoading ? <button type="submit">Sign In</button> : "Signing in..."}
            </form>
            {error && <div className="error">{error}</div>}
            <Counter />
        </div>
    );
}

export default SignIn;

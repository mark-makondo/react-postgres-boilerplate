import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBManager from "./classes/DBManager.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        await DBManager.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        if (error) res.json({ detail: error.detail });
        else res.json({ detail: "An error occurred while signing up" });
    }
});

app.get("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await DBManager.query("SELECT * FROM users WHERE email = $1", [email]);
        if (users.rows.length === 0) throw new Error({ detail: "User not found" });
        const user = users.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error({ detail: "Invalid password" });
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        if (error) res.json({ detail: error.detail });
        else res.json({ detail: "An error occurred while signing up" });
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

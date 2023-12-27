import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

class DBManager {
    constructor() {
        this.pool = new pg.Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT
        });
    }

    query(query, params) {
        return this.pool.query(query, params);
    }
}

export default new DBManager();

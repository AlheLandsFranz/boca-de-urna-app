import server from "./app.js"
import dotenv from 'dotenv'
dotenv.config()
let { PORT } = process.env;

    server.listen(3001, () => {
        console.log("Server on port", PORT || 3001)
    });


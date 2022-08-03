import server from "./app.js"
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

// Leer variable host o port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3001;

    server.listen(port, () => {
        console.log("Server on port", port || 3001)
    });


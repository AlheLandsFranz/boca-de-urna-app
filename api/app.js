import express from "express";
import { connectDB } from "./src/db.js";
import router from "./src/routes.js"
import cookieparser from "cookie-parser"
import bodyparser from "body-parser"
import cors from "cors"
// Initializations

connectDB()
const server = express()
server.use(bodyparser.urlencoded({extended: true}));
server.use(bodyparser.json());
server.use(cookieparser());
server.use(cors(
  {
    origin: [process.env.PORT, process.env.FRONT_URL],
    methods: ["POST", "PUT", "GET", "DELETE"],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true
  }
))

server.use('/', router);

export default server;
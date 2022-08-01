import server from "./app.js"

server.listen(process.env.PORT || 3001, () => {
    console.log("Server on port", process.env.PORT || 3001)
})
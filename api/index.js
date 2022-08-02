import server from "./app.js"

try {
    server.listen(process.env.PORT || 3001, () => {
        console.log("Server on port", process.env.PORT || 3001)
    });
} catch (error) {
    console.log(error)
}

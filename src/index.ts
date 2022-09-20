import express from 'express'
// @ts-ignore
import router from "./routes/IndexRoutes";

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
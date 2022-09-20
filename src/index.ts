import express from 'express'
import {router} from "./routes/IndexRoutes";

const app = express()

const PORT = process.env.PORT || 6000

app.use(express.json());

app.use("/ht_02/api", router)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
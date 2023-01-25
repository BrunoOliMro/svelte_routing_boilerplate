import express from 'express'
import path from "path"
import "dotenv/config"

const app = express()

const PORT = process.env[`PORT`]

app.use(express.static("build"))

app.listen(PORT, () => {
    console.log(`Process running on port ${PORT}`)
})
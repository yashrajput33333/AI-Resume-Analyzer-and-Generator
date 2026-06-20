import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

import authRoutes from "./routes/auth.routes.js"
app.use("/api/auth", authRoutes)

import interviewRoutes from "./routes/interview.routes.js"
app.use("/api/interview", interviewRoutes)



export { app }
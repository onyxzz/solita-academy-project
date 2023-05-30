import express from "express"
import * as dotenv from "dotenv"
import Station from "../mongodb/models/station.js"

dotenv.config()

const router = express.Router()

export default router

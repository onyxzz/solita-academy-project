import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js"
import stationRoutes from "./routes/stationRoutes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/stations", stationRoutes)

app.get("/", async (req, res) => {
  res.send("Hello World!")
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080/")
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()

import express from "express"
import * as dotenv from "dotenv"
import Station from "../mongodb/models/station.js"

dotenv.config()

const router = express.Router()

router.route("/").get(async (req, res) => {
  try {
    let query = await Station.find({})

    const stations = query

    res.status(200).json({ success: true, data: stations })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

router.route("/").post(async (req, res) => {
  try {
    const {
      stationID,
      name,
      address,
      city,
      operator,
      capacity,
      xCordinate,
      yCordinate,
    } = req.body

    const newStation = await Station.create({
      stationID,
      name,
      address,
      city,
      operator,
      capacity,
      xCordinate,
      yCordinate,
    })
    res.status(201).json({ success: true, data: newStation })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

export default router

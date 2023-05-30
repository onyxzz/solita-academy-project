import express from "express"
import * as dotenv from "dotenv"
import Station from "../mongodb/models/station.js"

dotenv.config()

const router = express.Router()

router.route("/").get(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.limit) || 28
    const skip = (page - 1) * pageSize

    const query = Station.find({}).skip(skip).limit(pageSize).exec()

    const total = await Station.countDocuments({})
    const pages = Math.ceil(total / pageSize)

    if (page > pages) {
      return query.status(404).json({
        success: false,
        message: "No page found",
      })
    }

    const stations = await query

    res.status(200).json({ success: true, data: stations, page, pages })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
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

import express from "express"
import * as dotenv from "dotenv"
import Trip from "../mongodb/models/trip.js"

dotenv.config()

const router = express.Router()

router.route("/").get(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.limit) || 28
    const skip = (page - 1) * pageSize

    const query = Trip.find({}).skip(skip).limit(pageSize).exec()

    const total = await Trip.countDocuments({})
    const pages = Math.ceil(total / pageSize)

    if (page > pages) {
      return query.status(404).json({
        success: false,
        message: "No page found",
      })
    }

    const trips = await query

    res.status(200).json({ success: true, data: trips, page, pages })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

router.route("/").post(async (req, res) => {
  try {
    const {
      departureDate,
      returnDate,
      departureStationId,
      returnStationId,
      returnStationName,
      distance,
      duration,
    } = req.body

    const newTrip = await Trip.create({
      departureDate,
      returnDate,
      departureStationId,
      returnStationId,
      returnStationName,
      distance,
      duration,
    })
    res.status(201).json({ success: true, data: newTrip })
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
})

export default router

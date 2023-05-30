import express from "express"
import * as dotenv from "dotenv"
import Trip from "../mongodb/models/trip.js"

dotenv.config()

const router = express.Router()

router.route("/").get(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.limit) || 21
    const skip = (page - 1) * pageSize

    const query = Trip.find({ departureStationName: req.query.stationName })
      .skip(skip)
      .limit(pageSize)
      .exec()

    const totalDepart = await Trip.countDocuments({
      departureStationName: req.query.stationName,
    })

    const totalReturn = await Trip.countDocuments({
      returnStationName: req.query.stationName,
    })

    const total = totalDepart + totalReturn

    const pages = Math.ceil(total / pageSize)

    if (page > pages) {
      return res.status(404).json({
        success: false,
        message: "No page found",
      })
    }

    const trips = await query

    res.status(200).json({
      success: true,
      data: trips,
      page,
      pages,
      totalDepart,
      totalReturn,
    })
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
      departureStationName,
      returnStationId,
      returnStationName,
      distance,
      duration,
    } = req.body

    const newTrip = await Trip.create({
      departureDate,
      returnDate,
      departureStationId,
      departureStationName,
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

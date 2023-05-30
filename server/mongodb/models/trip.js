import mongoose from "mongoose"

const Trip = new mongoose.Schema({
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  departureStationId: { type: Number, required: true },
  departureStationName: { type: String, required: true },
  returnStationId: { type: Number, required: true },
  returnStationName: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
})

const TripSchema = mongoose.model("Trip", Trip)

export default TripSchema

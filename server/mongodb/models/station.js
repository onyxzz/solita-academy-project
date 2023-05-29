import mongoose from "mongoose"

const Station = new mongoose.Schema({
  stationID: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: String,
  operator: String,
  capacity: { type: Number, required: true },
  xCordinate: { type: Number, required: true },
  yCordinate: { type: Number, required: true },
})

const StationSchema = mongoose.model("Station", Station)

export default StationSchema

import Tunel from '../models/tunel.js'

export const getTunels = async(req,res) => {
  try {
    const Tunels = await Tunel.find().sort({ createdAt: -1})
    res.header("Access-Control-Expose-Headers", "*")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.status(200).json(Tunels)
  } catch(err) {
    res.status(500).send(err)
  }
}
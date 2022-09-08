import Tunel from '../models/Tunel.js'

export const getTunels = async(req,res) => {
  try {
    const Tunels = await Tunel.find().sort({ createdAt: -1})
    res.status(200).json(Tunels)
  } catch(err) {
    res.status(500).send(err)
  }
}
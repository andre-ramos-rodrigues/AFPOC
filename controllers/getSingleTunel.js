import Tunel from '../models/tunel.js'

export const getSingleTunel = async(req,res) => {
  try {
    const post = await Tunel.findById(req.params.id)
    res.status(200).json(post)
  } catch(err) {
    res.status(500).send(err)
  }
}
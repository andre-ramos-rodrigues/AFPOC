import Tunel from '../models/tunel.js'

export const getTunels = async(req,res) => {
  try {
    const Tunels = await Tunel.find().sort({ createdAt: -1})
    res.set('Access-Control-Allow-Origin', 'https://cute-unicorn-84762b.netlify.app');
    res.status(200).json(Tunels)
  } catch(err) {
    res.status(500).send(err)
  }
}
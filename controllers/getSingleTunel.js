import Tunel from '../models/tunel.js'

export const getSingleTunel = async(req,res) => {
  try {
    const post = await Tunel.findById(req.params.id)
    res.set('Access-Control-Allow-Origin', 'https://cute-unicorn-84762b.netlify.app');
    res.status(200).json(post)
  } catch(err) {
    res.status(500).send(err)
  }
}
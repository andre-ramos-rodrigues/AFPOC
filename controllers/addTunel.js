import Tunel from '../models/tunel.js'

export const addTunel = async(req,res) => {
  //const user = await User.findById(req.user.id)

  const newTunel = new Tunel({
    autor: req.body.username,
     ...req.body, 
  })

  try {
    const Tunel = await newTunel.save()
    res.set('Access-Control-Allow-Origin', 'https://cute-unicorn-84762b.netlify.app');
    res.status(200).json(Tunel)
  } catch(err) {
    res.status(500).send(err)
  }
}
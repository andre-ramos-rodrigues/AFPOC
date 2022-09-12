import User from '../models/user.js'
import Tunel from '../models/tunel.js'

export const deleteTunel = async(req,res) => {
  try {
    const post = await Tunel.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete()
        res.set('Access-Control-Allow-Origin', 'https://631f5bfaf482183823aa8ed2--cute-unicorn-84762b.netlify.app/');
        res.status(200).json("post deletado");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
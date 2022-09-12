import User from '../models/user.js'
import Tunel from '../models/tunel.js'

export const editTunel = async(req,res) => {
  try {
    const post = await Tunel.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Tunel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
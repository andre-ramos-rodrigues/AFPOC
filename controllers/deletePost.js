import User from '../models/user.js'
import Post from '../models/post.js'

export const deletePost = async(req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete()
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
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
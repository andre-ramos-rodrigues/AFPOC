import Post from '../models/post.js'

export const getPosts = async(req,res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1})
    res.header("Access-Control-Expose-Headers", "*")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.status(200).json(posts)
  } catch(err) {
    res.status(500).send(err)
  }
}
import Post from '../models/post.js'

export const getPosts = async(req,res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1})
    res.status(200).json(posts)
  } catch(err) {
    res.status(500).send(err)
  }
}
import User from '../models/user.js'
import Post from '../models/post.js'

export const addPost = async(req,res) => {
  res.set('Access-Control-Allow-Origin', 'https://cute-unicorn-84762b.netlify.app');
  //const user = await User.findById(req.user.id)

  const newPost = new Post({
    autor: req.body.username,
     ...req.body, 
  })

  try {
    const Post = await newPost.save()
    res.status(200).json(Post)
  } catch(err) {
    res.status(500).send(err)
  }
}
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt)

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      image: req.body.image,
    });

    const saved = await newUser.save();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json('usuário salvo: ' + saved.username);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async(req,res,next) => {
  try{
    const user = await User.findOne({username: req.body.username})
    if(!user) return res.status(401).json('usuário não encontrado')
    const isCorrect = await bcrypt.compare(req.body.password, user.password)
    !isCorrect && res.status(401).json('usuário	ou senha inválido')
    const {password, ...others} = user._doc
    // generates a jwt token
    const token = jwt.sign({id: user._id}, 'asd231')
    // creates a cookie with the value of the jwt token
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  }catch(err){
    next(err)
  }
}

export const logout = async(req,res,next) => {
  const token = req.cookies.token

  token && res.clearCookie(req.cookies.token)
}
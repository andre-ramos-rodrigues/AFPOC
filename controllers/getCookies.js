import jwt from 'jsonwebtoken'

const getCookies = (req,res,next) => {
  const token = req.cookies.token
  !token && res.status(400).json('nenhum cookie/token encontrado')

  jwt.verify(token, 'asd231', (err, user) => {
    if (err) return res.status(401).json('token inválido');
    req.user = user;
    console.log(req.user)
    next()
  })
}

export default getCookies
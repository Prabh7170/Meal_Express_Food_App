import jwt from "jsonwebtoken"
//this middleware takes the token and convert it into user id
//using the userid we can use api
const authMiddleWare = async(req,res , next)=>{
const {token} = req.headers;
if(!token){
  return res.json({
    success:false,
    message:"Not authorised Login Again"
  })
}
  try{
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  }
  catch(error){
    console.log(error);
    res.json({success:false , message:"Error"})
  }
}

export default authMiddleWare;
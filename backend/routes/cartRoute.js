import express from "express"
import { addtoCart, removeFromCart , getCart } from "../controllers/cartContoller.js"
import authMiddleWare from "../middleware/auth.js";


const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare,addtoCart)
cartRouter.post("/remove",authMiddleWare,removeFromCart)
cartRouter.post("/get",authMiddleWare,getCart)


export default cartRouter
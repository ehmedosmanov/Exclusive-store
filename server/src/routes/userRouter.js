import express from 'express'
import { deleteUser, getAllUser} from '../controllers/userController.js'

export const userRouter = express.Router()


userRouter.get('/user', getAllUser)
userRouter.delete('/user/:id', deleteUser)
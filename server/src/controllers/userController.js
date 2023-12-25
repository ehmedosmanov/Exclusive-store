import { User } from "../models/userModel.js";

export const getAllUser = async (req,res) => {
    try {
        const users = await User.find({})
        if(!users) return res.status(404).json({message: "User not found"})
        res.send(users)
    } catch (error) {
    res.status(500).json({ message: error.message });     
    }
}


export const deleteUser = async (req,res) => {
    try {
        const userId = await User.findById(req.params.id)
        const user = await User.findByIdAndDelete(userId)
        if(!user) {
            res.status(404).json({message: "User not found"})
        } else {
            res.status(200).json({message: "User deleted", user: user})
        }
    } catch (error) {
    res.status(500).json({ message: error.message });     
        
    }
}


export const updateUser = async (req,res) => { 
    try {
        const userId = await User.findById(req.params.id)
        const user = await User.findByIdAndUpdate(userId)
        const hashPassword = bcrypt.hashSync(req.body.password, 10);
        if(!user) {
            res.status(404).json({message: "User not found"})
        } else {
            User.username = req.body.username;
            User.password = hashPassword;
            User.email = req.body.email;
            User.phone = req.body.phone;
            User.role = req.body.role;
            res.status(200).json({ message: updateUser });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });     
        
    }
}
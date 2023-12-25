import mongoose from "mongoose";


const {Schema} = mongoose

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true},
    phone: { type: String, match: [/^\+994\d{9}$/, 'Please enter a valid Azerbaijan phone number with the country code +994']},
    role: { type: String, enum: ["user", "admin", "superAdmin"], default: "user" },
}, {timestamps: true})


export const User = mongoose.model('User', userSchema)
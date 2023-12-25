import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { username, password, email, phone, role } = req.body;
    const userExist = await User.findOne({ username: username });
    if (userExist)
      return res.status(409).json({ message: "User Already Exist" });
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: hashPassword,
      email: email,
      phone: phone,
      role,
    });
    await newUser.save();
    const token = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.send(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user || !(await bcrypt.compareSync(password, user.password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ message: "Login successful", token: token });
  } catch (error) {
    log
    res.status(500).json({ message: error.message });
  }
};

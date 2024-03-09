const Auth = require("../Models/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Handles user login.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} JSON response indicating the login status.
 */

const JSONSECRET = "12345";
const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Auth.findOne({ email: email });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: "User not found", success: false });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // Check if Password Matches the one in Database
    if (!isPasswordCorrect)
      return res
        .status(404)
        .json({ message: "Password Not Correct", success: false });

    const token = jwt.sign({ email: existingUser.email }, JSONSECRET, {
      expiresIn: "2hr",
    });

    res.status(200).json({
      message: "Logged in Succesfully",
      success: true,
      payload: { ...existingUser._doc, token },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An Error Occured", success: false });
  }
};

/**
 * Handles user login.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {object} JSON response indicating the registeration status.
 */

const Register = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    /* Check if User ALready Exist */
    const user = await Auth.findOne({ email: email });
    if (user)
      return res
        .status(401)
        .json({ message: "User Already Exist", success: false });

    /* Hash the User Password */
    const hashedPassword = await bcrypt.hash(password, 16);

    const result = await Auth.create({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registered Successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "An Error Occured", success: false });
  }
};

module.exports = {
  Login,
  Register,
};

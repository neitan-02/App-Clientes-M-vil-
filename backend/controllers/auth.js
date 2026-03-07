const User   = require("../models/User"); 
const bcrypt = require("bcrypt")

exports.login = (req,res) => {
    const { email, password } = req.body; 

    //Validaciones
    if(!email || !password) {
        return res.status(400).json({message: "Correo electronico y la contraseña son requeridos"})
    } 

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        return res.status
    } 
}
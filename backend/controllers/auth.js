const User = require("../models/User");
const bcrypt = require("bcrypt")

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Correo electronico y la contraseña son requeridos" })
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Correo electronico es invalido" });
    }

    User.finByEmail(email, async (error, user) => {
        if (err) return res.status(500).json(err);

        if (!user) {
            return res.status(401).json({ message: "Usuario no encontrado" });
        }

        const validaPassword = await bcrypt.compare(password, user.password);

        if (!validaPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" })
        }

        req.sesion.user = {
            id: user.id,
            email: user.email
        };

        res.json({ message: "Inicio de sesión exitoso", user: req.session.user });
    });
};

export default logout = (req, res) => {
    req.sesion.destroy(() => {
        res.json({ message: "Sesión Cerrada" });
    });
}; 
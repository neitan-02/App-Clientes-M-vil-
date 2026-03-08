const User = require("../models/User");

const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y password requeridos" });
    }

    User.findByEmail(email, (err, user) => {

        if (err) return res.status(500).json(err);

        if (!user) {
            return res.status(401).json({ message: "Usuario no encontrado" });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: "Password incorrecto" });
        }

        req.session.user = {
            id: user.id,
            email: user.email
        };

        res.json({ message: "Login exitoso" });

    });

};

const logout = (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Sesión cerrada" });
    });
};

module.exports = {
    login, logout
};
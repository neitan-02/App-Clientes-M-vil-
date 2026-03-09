require("dotenv").config();

const express = require("express");
const session = require("express-session");

const auth = require("./routes/auth");
const product = require("./routes/product");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use("/api", auth);
app.use("/api", product);

/* CREAR USUARIO POR DEFECTO */
const defaultEmail = "admin@gmail.com";
const defaultPassword = "123456";

User.findByEmail(defaultEmail, (err, user) => {

    if (!user) {
        User.create({
            email: defaultEmail,
            password: defaultPassword
        }, () => {
            console.log("Usuario admin creado");
        });
    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
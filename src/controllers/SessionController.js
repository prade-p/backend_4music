const Firebase = require('../utils/Firebase');
const UsuarioModel = require('../models/UsuarioModel');
const jwt = require('jsonwebtoken');

module.exports = {
    async signIn(request, response) {
        try {
            const { email, password } = request.body;
            
            let firebaseId;
            try {
               firebaseId = await Firebase.login(email, password);  
            } catch (error) {
                return response.status(403).json({ notification: "Invalid credentials"})
            }
            
            const usuario = await UsuarioModel.getByFields({firebase_id: firebaseId})

            const accessToken = jwt.sign({usuario}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "30d",
            });

            return response.status(200).json({ usuario,accessToken});

        } catch (error) {
            return response
                .status(500)
                .json({ notification: "Error while trying to validate credentials",});
        }
    }
};
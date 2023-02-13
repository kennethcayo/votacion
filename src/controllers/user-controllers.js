const userController = {}
const User = require('../models/user-model');
const path = require('path')


userController.register = (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    user.save(err => {
        if (err) {
            res.sendFile(path.join(__dirname, '../../public', '/signup.html'));
            console.log('Error:', err)
        } else {
            res.sendFile(path.join(__dirname, '../../public', '/signup.html'));
            console.log('!User successfully registered¡')
        }
    });
}

userController.authenticate = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            console.log('ERROR AUTENTICACION DE USUARIO')
            
        } else if (!user) {
            res.sendFile(path.join(__dirname, '../../public', '/index.html'));
            console.log('EL USUARIO NO EXISTE ')
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    console.log('ERROR WHEN AUTHENTICATING')
                } else if (result) {
                    res.sendFile('vote.html', { root: 'public' });
                } else {
                    console.log('INCORRECT USERNAME OR PASSWORD')
                }
            });
        }
    });
}


module.exports = userController;
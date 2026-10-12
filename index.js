'use strict';

const generatePassword = (length, specialChars = true) =>{
    const charset = specialChars ? 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%()*+,-./:;=?@[]^_{|}~'
    :
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let password = '';

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = generatePassword;
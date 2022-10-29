const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
userSchema.statics.signup= async function(email, password) {

    //validation

    //to check if all fields are filled
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    //to check if email is valid
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    //to check if password is strong enough
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email})
    //to check if email is already used
    if(exists) {
        throw Error('Email already in use')
    }

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password, salt)

   const user = await this.create({email, password: hash})

   return user
}

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose');

const server = 'ds133252.mlab.com:33252'
const database = 'first-custom-api'
const user = 'user1'
const password = 'password1'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

const customerSchema = new mongoose.Schema ({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', customerSchema)

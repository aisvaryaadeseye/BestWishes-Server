const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const resetTokenSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        
        default: Date.now()
    }

},
);

resetTokenSchema.pre('save', async function (next) {  // pre..>> perform this ftn before saving 
    if (this.isModified('token')) {
        const hash = await bcrypt.hash(this.token, 8)
        this.token = hash
    }
    next()
})

resetTokenSchema.methods.compareToken = async function (token) {
    const result = await bcrypt.compareSync(token, this.token)
    return result;
}



module.exports = mongoose.model('ResetToken', resetTokenSchema)
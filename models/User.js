const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new Schema({
    title: { type: String, 
        required: true,
        unique: true,
        trim: true },

    email: { type: String,
        required: true,
        unique: true },

    thoughts: [{type: Schema.Types.ObjectId,
        ref: 'thought' }],

    friends: [{type: Schema.Types.ObjectId,
        ref: 'user' }],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})


const User = model('user', userSchema);

module.exports = User
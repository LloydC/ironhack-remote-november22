const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  imageUrl: {
    type: String,
    default: 'public/images/default-avatar.png'
  },
  // avatarUrl: {
  //   type: String,
  //   default: 'images/default-avatar.png'
  // }
});

const User = model("User", userSchema);

module.exports = User;

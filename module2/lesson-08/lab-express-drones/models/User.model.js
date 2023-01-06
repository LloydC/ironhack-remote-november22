// Iteration #1
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
  },
  drones: [{
    type: Schema.Types.ObjectId,
    ref: 'Drones'
  }]
});

const User = model("User", userSchema);

module.exports = User;
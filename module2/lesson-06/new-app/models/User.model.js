const { Schema, model } = require("mongoose");

// const Schema = require("mongoose").Schema
// const model = require("mongoose").model

// const me = { name: 'Lloyd' }
// const { name } = me;
// JS Destructuring

// TODO: Please make sure you edit the User model to whatever makes sense in this case
// defining my userSchema
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema); // defining a User Model

module.exports = User;

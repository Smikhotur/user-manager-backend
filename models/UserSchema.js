const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    name: { type: String },
    surname: { type: String },
    desc: { type: String },
    user_id: { type: Number }
  },
);

module.exports = model("users", UserSchema);

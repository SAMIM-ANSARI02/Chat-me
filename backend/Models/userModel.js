const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-profile-picture&psig=AOvVaw1-plj3obTps3-TBRJJXjO4&ust=1700653138573000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCODMm6eB1YIDFQAAAAAdAAAAABAE",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;

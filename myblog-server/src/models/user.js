import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedpassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedpassword = hash;
};
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedpassword);
  return result; // boolean값 반환
};
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedpassword;
  return data;
};
UserSchema.methods.generateToken = function () {
  // jwt.sign(토큰 안에 집어넣을 데이터, JWT 암호)
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;

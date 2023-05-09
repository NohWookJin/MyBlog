import mongoose from 'mongoose';

const { Schema } = mongoose;

// 스키마 생성
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

// 모델 생성
// model(스키마 이름, 스키마 객체)
const Post = mongoose.model('Post', PostSchema);
export default Post;

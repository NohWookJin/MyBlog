import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

// 비구조화 할당으로 process.env 내부 값 레퍼런스 생성
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

import api from './api/index.js';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// port 지정
const port = PORT || 4000;

app.listen(port, () => {
  console.log('Listening to port %d', port);
});

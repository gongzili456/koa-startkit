import koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-generic-session';
import redisStore from 'koa-redis';
import config from 'config';
import useragent from 'koa-useragent';
import redis from '../lib/redis';
import router from './router';

const app = koa();

/**
* Catch & Handle errors
*/
app.use(function* (next) {
  try {
    yield next;
  } catch (e) {
    console.error(e.stack);

    this.status = e.status || 500;
    this.body = {
      status: e.code || 500,
      message: e.message
    }
  }
});

app.keys = ['qra-sso', 'sso-qra'];
app.use(session({
  key: 'qra-sso',
  prefix: 'qra-sso:',
  store: new redisStore({
    client: redis
  }),
  cookie: {
    path: '/',
    httpOnly: true,
    maxage: null,
    rewrite: true,
    signed: true,
    domain: null
  }
}));
app.use(logger());

app.use(useragent());
app.use(router().routes());


export default app;

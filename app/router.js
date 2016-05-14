import _router from 'koa-router';
import config from 'config';
import assign from 'object-assign';
import _debug from 'debug';
import requreDir from 'require-dir';

const debug = _debug('app:router:');
const controllers = requreDir('./controllers');

debug('controllers: ', controllers);

export default function () {
  const router = _router();

  router.get('/', controllers.hello);
  return router;
}

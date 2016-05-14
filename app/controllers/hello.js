import _debug from 'debug';

const debug = _debug('app:controllers:hello:');

export default function* () {
  debug('hello world come in.')
  this.body = 'Hello world.';
}

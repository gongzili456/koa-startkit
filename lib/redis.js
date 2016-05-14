import redis from 'redis';
import wrapper from 'co-redis';
import config from 'config'

const client = redis.createClient(config.redis);

if (config.redis.pass) {
  client.auth(config.redis.pass);
}

export default wrapper(client);

require('babel-core/register');
const app = require('./app/app');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log('Server started, on port: ', port);
});

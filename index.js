const app = require('express')();
const https = require('https');
const http = require('http');

app.set('port', 443);

app.get('/api', (req, res) => {
  const path = `/api/item/test`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: `);
});

var server = https.createServer(app)
server.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
})
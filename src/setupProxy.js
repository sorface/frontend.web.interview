const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
        '/api/product/interview',
        createProxyMiddleware({
          target: process.env['REACT_APP_PROXY_TARGET'] || 'http://localhost:9000/',
          changeOrigin: true,
        })
  );
  // http://localhost:9000/oauth2/authorization/passport
  app.use(
        '/oauth2',
        createProxyMiddleware({
            target: process.env['REACT_APP_PROXY_TARGET'] || 'http://localhost:9000/',
            // changeOrigin: true,
        })
  );
    // http://localhost:9000/oauth2/authorization/passport
    app.use(
        '/logout',
        createProxyMiddleware({
            target: process.env['REACT_APP_PROXY_TARGET'] || 'http://localhost:9000/',
            // changeOrigin: true,
        })
    );

  // http://localhost:9000
            // /oauth2
            // /api/product/interview
            // ws:../stream/product/interview
            // /api/passport/accounts/current

  app.use(
        '/api/passport',
        createProxyMiddleware({
            target: process.env['REACT_APP_PROXY_TARGET'] || 'http://localhost:9000/',
            changeOrigin: true,
        })
  );
};

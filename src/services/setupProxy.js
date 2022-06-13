import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://webgenieserver-dev.ap-northeast-2.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
};

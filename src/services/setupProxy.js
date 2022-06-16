import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://webgenie.click/",
      changeOrigin: true,
    })
  );
};

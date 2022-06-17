import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: process.env.REACT_APP_API_ENDPOINT_URL || "http://localhost:8080",
      changeOrigin: true,
    })
  );
};

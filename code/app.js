const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

const apiProxy = createProxyMiddleware("/", {
  target: "https://opanaiserver1.openai.azure.com",
  changeOrigin: true,
});

app.use("/", apiProxy);

app.listen(9000);

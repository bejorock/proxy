const express = require("express");
const bodyParser = require("body-parser");
// const { createProxyMiddleware } = require('http-proxy-middleware');
const fetch = require("node-fetch");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));

app.all("/bsiSandbox", (req, res) => {
  // console.log(typeof req.body);

  fetch("https://sandbox.api.bpi.co.id/ext/bnis/?fungsi=vabilling", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.status(500).send(err));
});

app.all("/bsiProd", (req, res) => {
  // console.log(typeof req.body);

  fetch("https://api.bpi.co.id/ext/bnis/?fungsi=vabilling", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.status(500).send(err));
});

app.all("/billingProd", (req, res) => {
  // console.log(typeof req.body);

  fetch("http://billing.alwildan3bsd.sch.id/api/v1/invoice/bsi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.status(500).send(err));
});

app.all("/billingSandbox", (req, res) => {
  // console.log(typeof req.body);

  fetch("http://billing-test.alwildan3bsd.sch.id/api/v1/invoice/bsi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => res.status(500).send(err));
});

app.listen(3008, () => {
  console.log("app is running");
});

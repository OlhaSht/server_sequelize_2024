const express = require("express");
const router = rquire("./router.js");

const app = express();
app.use(express.json());

app.use('/api', router);

module.express = app;
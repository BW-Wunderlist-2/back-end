require("dotenv").config();

const server = require("./endpoints/server.js");

const port = process.env.PORT || 5000;


server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

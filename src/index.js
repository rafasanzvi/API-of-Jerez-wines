const express = require('express')

const app = express();
const port = process.env.PORT || 9000 //Server in port 9000

app.listen(port, () => console.log('server listening on port', port)) //Server listening on port = 9000
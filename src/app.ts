import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Stationery Shop app running')
  })

export default app;



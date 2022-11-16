import express from 'express';
// @ts-ignore
import serve from 'express-static';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import icongen from 'icon-gen';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();

// set up rate limiter: maximum of 60 requests per minute
const limiter = rateLimit({
  windowMs: 1000, // 1 sec
  max: 1000,
});

app.use(limiter);

app.get("/ping", (_, res) => {
  res.send("ping");
});


app.get('/', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.promises.readFile(`${__dirname}/docs/index.html`).then(html => {
    res.write(html);
    res.end();
  });
});
// @ts-ignore
app.use(serve(`${__dirname}/docs`, null));


icongen('icon.png', './docs')
  .then((results) => {
    console.log(`${results.length} icons generated.`);
  })
  .catch((err) => {
    console.error(err)
  })


const server = app.listen(PORT, () => {
  console.log('Demo running at %s', PORT);
});

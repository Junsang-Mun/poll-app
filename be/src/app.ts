import type { Express, Request, Response } from 'express';
const express = require('express');

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`[BE] Server is running on http://localhost:${port}`);
});

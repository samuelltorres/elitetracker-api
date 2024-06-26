import crypto from 'node:crypto';
import path from 'node:path';
import express from 'express';

const app = express();
const port = 4000;

app.get('/', (request, response) => {
	return response.send('Hello Expess + TypeScript');
});

app.listen(4000, () => console.log(`🚀 Server is running at port ${port}!`));

import crypto from 'node:crypto';
import path from 'node:path';
import express from 'express';
import { setupMongo } from './database';
import { routes } from './routes';

const app = express();
const port = 4000;

setupMongo()
	.then(() => {
		app.use(express.json());
		app.use(routes);

		app.listen(4000, () =>
			console.log(`🚀 Server is running at port ${port}!`),
		);
	})
	.catch((err) => {
		console.error(err);
	});

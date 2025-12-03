import serverless from 'serverless-http';
import app from '../dist/app.mjs';

// Wrap the built Express app for Vercel serverless
const handler = serverless(app.default || app);

export default handler;

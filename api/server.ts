import serverless from 'serverless-http';
import createApp from '../server/app';

// createApp returns an Express app (synchronous)
const app = createApp();

const handler = serverless(app as any);

export default handler;

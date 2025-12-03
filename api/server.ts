import serverless from "serverless-http";
import { createApp } from "../server/app";

// createApp is synchronous and returns an Express app
const app = createApp();

const handler = serverless(app);

export default handler;

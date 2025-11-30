// Vercel serverless function handler
// Routes all requests to the Express app built in dist/index.cjs
import type { VercelRequest, VercelResponse } from "@vercel/node";

const app = require("../dist/index.cjs");

export default async (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};

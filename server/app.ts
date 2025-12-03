import express, { type Express, type Request, type Response, type NextFunction } from "express";
import { registerRoutes } from "./routes";

export function createApp(): Express {
  const app = express();

  // body parsing with raw capture if necessary
  app.use(
    express.json({
      verify: (req: Request, _res, buf: Buffer) => {
        // attach rawBody if consumers expect it
        // @ts-expect-error augmenting IncomingMessage
        (req as any).rawBody = buf;
      },
    }),
  );

  app.use(express.urlencoded({ extended: false }));

  // simple request logging for /api routes
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (res as any).json = function (bodyJson: any, ...args: any[]) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }
        console.log(logLine);
      }
    });

    next();
  });

  // register routes (synchronous)
  registerRoutes(app);

  // error handler (kept minimal)
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  return app;
}

export default createApp;

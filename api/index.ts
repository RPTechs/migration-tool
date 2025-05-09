import express from 'express';
import { registerRoutes } from '../server/routes';

// Create Express application
const app = express();
app.use(express.json());

// Configure middleware
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Register API routes
(async () => {
  await registerRoutes(app);
})();

// Export for Vercel serverless function
export default app;
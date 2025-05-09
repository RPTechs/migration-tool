/**
 * API Routes Configuration
 */

const express = require('express');
const { storage } = require('../services/storage');

/**
 * Register API routes
 * @param {Express} app - Express application
 * @returns {Promise<Server>} HTTP Server
 */
async function registerRoutes(app) {
  // User routes
  app.get('/api/user/profile', async (req, res) => {
    const user = await storage.getUserByUsername('laharcre');
    res.json(user);
  });

  // Connection routes
  app.get('/api/connections', async (req, res) => {
    const connections = await storage.getConnections();
    res.json(connections);
  });

  // Migration routes
  app.get('/api/migrations', async (req, res) => {
    const migrations = await storage.getMigrations();
    res.json(migrations);
  });

  // Estimate routes
  app.get('/api/estimates', async (req, res) => {
    const estimates = await storage.getEstimates();
    res.json(estimates);
  });

  // Platform routes
  app.get('/api/platforms', async (req, res) => {
    const platforms = await storage.getPlatforms();
    res.json(platforms);
  });

  return app.server;
}

module.exports = { registerRoutes };

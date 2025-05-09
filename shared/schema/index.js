/**
 * Shared Schema Definitions
 * 
 * These schemas define the data structures used across the application.
 * They serve as contracts between the frontend and backend.
 */

// User Schema
const userSchema = {
  id: { type: 'string', description: 'Unique identifier' },
  username: { type: 'string', description: 'User login name' },
  email: { type: 'string', description: 'User email address' },
  password: { type: 'string', description: 'User password (hashed)' },
  createdAt: { type: 'date', description: 'Account creation timestamp' },
};

// Connection Schema
const connectionSchema = {
  id: { type: 'string', description: 'Unique identifier' },
  name: { type: 'string', description: 'Display name for the connection' },
  platform: { type: 'string', description: 'CRM platform name' },
  credentials: { type: 'object', description: 'Authentication credentials (encrypted)' },
  status: { type: 'string', enum: ['active', 'inactive', 'error'], description: 'Connection status' },
  createdAt: { type: 'date', description: 'Connection creation timestamp' },
  lastUsed: { type: 'date', description: 'Last time connection was used' },
};

// Migration Schema
const migrationSchema = {
  id: { type: 'string', description: 'Unique identifier' },
  name: { type: 'string', description: 'Migration name' },
  source: { type: 'string', description: 'Source platform' },
  destination: { type: 'string', description: 'Destination platform' },
  type: { type: 'string', enum: ['quick', 'custom'], description: 'Migration type' },
  status: { type: 'string', enum: ['pending', 'in_progress', 'completed', 'failed'], description: 'Migration status' },
  progress: { type: 'number', description: 'Progress percentage' },
  totalRecords: { type: 'number', description: 'Total records to migrate' },
  migratedRecords: { type: 'number', description: 'Number of records migrated' },
  startedAt: { type: 'date', description: 'Start timestamp' },
  completedAt: { type: 'date', description: 'Completion timestamp' },
  logs: { type: 'array', items: { type: 'object' }, description: 'Migration logs' },
};

// Estimate Schema
const estimateSchema = {
  id: { type: 'string', description: 'Unique identifier' },
  platform: { type: 'string', description: 'Target platform' },
  dataSize: { type: 'number', description: 'Estimated data size in MB' },
  recordCount: { type: 'object', description: 'Breakdown of record counts by type' },
  estimatedPrice: { type: 'number', description: 'Estimated migration price' },
  estimatedTime: { type: 'number', description: 'Estimated migration time in hours' },
  createdAt: { type: 'date', description: 'Estimate creation timestamp' },
};

// Platform Schema
const platformSchema = {
  id: { type: 'string', description: 'Unique identifier' },
  name: { type: 'string', description: 'Platform name' },
  logo: { type: 'string', description: 'Platform logo path' },
  features: { type: 'array', items: { type: 'string' }, description: 'Supported features' },
};

// Export all schemas
module.exports = {
  userSchema,
  connectionSchema,
  migrationSchema,
  estimateSchema,
  platformSchema,
  
  // Simplified validation helpers
  validateUser: (user) => {
    // Simple validation - in a real application, use a proper validation library
    return user && user.username && user.email;
  },
  
  validateConnection: (connection) => {
    return connection && connection.platform && connection.credentials;
  },
  
  validateMigration: (migration) => {
    return migration && migration.source && migration.destination && migration.type;
  },
  
  validateEstimate: (estimate) => {
    return estimate && estimate.platform;
  }
};

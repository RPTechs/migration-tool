/**
 * API Gateway Configuration
 */

module.exports = {
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  logging: {
    format: 'dev'
  },
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
};

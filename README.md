# CRM Migration Platform

A comprehensive CRM migration management platform that enables seamless service integration and workflow optimization through a modular, user-centric architecture.

## Project Structure

The project follows a microservices-inspired architecture with the following main components:

### `frontend/`
The presentation layer containing the dashboard UI and client-side application logic.

- **`src/components/`**: Reusable UI components for building consistent interfaces
- **`src/pages/`**: Dashboard pages corresponding to different sections of the application
- **`src/services/`**: Client-side services for API communication
- **`src/assets/`**: Static resources including images, logos, and other media files

### `api-gateway/`
API Gateway that handles incoming requests, authentication, and routes to appropriate services.

- **`src/routes/`**: API route definitions and handlers
- **`src/middlewares/`**: Authentication, validation, and other middleware
- **`src/services/`**: Services for data access and business logic
- **`config/`**: Configuration settings for the API gateway

### `shared/`
Shared resources and utilities used across different parts of the application.

- **`schema/`**: Data schemas and validation utilities shared between frontend and backend

## Core Technologies

- **React.js** frontend framework
- **JavaScript/TypeScript** ecosystem
- **Express.js** for API Gateway
- **Microservices architecture**
- **Tailwind CSS** for styling

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crm-migration-platform.git
cd crm-migration-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Features

- User-friendly dashboard for managing CRM migrations
- Platform connection management
- Migration workflow creation and monitoring
- Data estimation and analysis
- Comprehensive reporting

## License

This project is licensed under the MIT License - see the LICENSE file for details.


<img src="https://9040550.fs1.hubspotusercontent-na1.net/hubfs/9040550/__hs-marketplace__/RP%20Green%20Logo-3-1.png" alt="RevPartnersLogo" width="400"/>

## Application Overview
This application is a robust and secure CRM migration engine designed to enable seamless data migration from Salesforce to HubSpot. It ensures data integrity, automation, and compliance while allowing users to configure field mappings, monitor migration progress, and validate data accuracy post-migration. The system is built to handle complex object relationships and supports large data volumes with real-time monitoring and error recovery.

## Features Included in Version 1
The following core functionalities are included in the MVP release:

🔐 **Authentication & Connectivity**
- **User Authentication:** Secure login with username/password or SSO.
- **CRM Platform Connection:** OAuth/API-key based secure connection to Salesforce and HubSpot.

⚙️ **Migration Setup & Configuration**
- **Migration Configuration:** UI to map fields between Salesforce and HubSpot.
- **Data Volume Estimation:** Pre-migration object count and storage size report.
- **Data Filtering:** Filter records based on configurable criteria (e.g., dates, status).

📥  **Data Handling Pipeline**
- **Data Extraction:** Pulls object records from Salesforce using pagination and filters.
- **Data Cleansing:** Removes nulls, fixes invalid formats, ensures consistency.
- **Deduplication:** Identifies and removes duplicates based on custom rules.
- **Relationship Mapping:** Preserves parent-child relationships between objects.
- **Data Loading:** Uploads transformed records into HubSpot via API.

🧩 **Automation & Smart Configuration**
- **Automatic Pipeline Creation:** Auto-generates pipelines in HubSpot based on triggers.
- **Automatic Property Creation:** Creates missing fields in HubSpot based on source schema.
- **Lookup Property Creation:** Supports creation of HubSpot lookup properties for related objects.

📊 **Monitoring & Validation**
- **Progress Monitoring:** Visual dashboard to track migration progress.
- **Error Handling:** Real-time error detection with retry logic and logs.
- **Post-Migration Validation:** Compares source and destination data for completeness.
- **Sample Migration:** Executes a 10% test migration with validation reports.
- **Migration Rollback:** Ability to reverse migrations to a previous clean state.
- **Migration Notifications:** Sends alerts at key milestones of the process.

⚠️ **Platform Requirements & Limitations**
This application requires Salesforce editions with API access enabled. It will only work with the following editions:

- ✅ Supported Salesforce Editions (API access available):
 - Enterprise Edition
 - Unlimited Edition
 - Developer Edition
 - Performance Edition

- ❌ Unsupported Editions (API access not available by default):
- Group Edition
- Essentials Edition
- Professional Edition (API access may be available as an add-on)

Please confirm your Salesforce license edition before using this application.

# 🛡️ Non-Functional Requirements

In addition to its core functionality, the Migration Engine adheres to a set of non-functional requirements to ensure performance, reliability, and operational excellence:

| **Non-Functional Requirement** | **Description** | **Fitness Function** |
|-------------------------------|-----------------|----------------------|
| **Scalability** | The system must efficiently handle migrations of various sizes, from small businesses (thousands of records) to enterprises (millions). | Execute load tests with dataset volumes increasing by orders of magnitude (10K, 100K, 1M records). Response time degradation must be sub-linear. |
| **Performance** | Migration operations must maintain a throughput of at least 1,000 records/min under normal conditions. | Measure records processed per minute during standardized benchmark migrations. |
| **Reliability** | The system must achieve 99.5% uptime and automatically recover from failures. | Simulated service crashes must result in recovery with zero data loss. |
| **Security** | All data must be encrypted in transit and at rest, using industry-standard protocols. | Security scans must report no high or critical vulnerabilities. Pen tests must reveal no exploitable issues. |
| **API Compliance** | The system must respect Salesforce and HubSpot API rate limits to prevent throttling. | Monitor API usage to remain under 80% of API rate limits in any 5-minute window. |
| **Resilience** | The system must handle temporary outages or errors gracefully and retry operations. | Simulated network/API failures must trigger auto-retry and recovery mechanisms. |
| **Observability** | All migration operations must be logged and traceable with correlation IDs. | Logs and metrics must cover every step and be accessible via observability tooling. |
| **Data Integrity** | 100% field-level data accuracy must be preserved during migration. | Post-migration validation must confirm all fields match exactly between systems. |


# Project Structure

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









## What's Coming in Version 2 (Planned)
Version 2 of the Migration Engine will build on the solid foundation of V1 by introducing advanced features focused on flexibility, performance optimization, and auditability. These enhancements will include:

🔄 **Data Sync & Change Management**
- **Incremental Migration:** Support for delta updates to sync only modified records.
- **Delta Validation:** Validation of changes applied during incremental updates.

📊 **Insights & Auditability**
- **Migration History:** Full migration log with searchable historical records.
- **Performance Analytics:** Detailed performance metrics for migration tuning.
- **HIPAA Compliance Support:** Enhanced security features and audit trails for healthcare data.

⚙️ **Flexibility & Reusability**
- **Migration Templates:** Save and reuse migration configurations for similar projects.
- **Custom Object Migration:** Migration of Salesforce custom objects and fields.
- **Association Label Configuration:** Support for custom relationship labels between records.
- **Business Unit Selection:** Route data to specific business units in HubSpot.

These features are targeted for future releases to accommodate more complex use cases, support compliance requirements, and enhance overall migration performance and reusability.


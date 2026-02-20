export const skillInfo = {
  // Frontend
  'Responsive Design': {
    description: 'Fluid layouts and media queries that adapt seamlessly across all screen sizes.',
    usedIn: ['VuMenu', 'Jack Simon Makes', 'Stashmallows', 'Math Fun Mania'],
  },
  'Component-Driven Architecture': {
    description: 'Building UIs as a composition of isolated, reusable components.',
    usedIn: ['VuMenu', 'Jack Simon Makes', 'Stashmallows', 'Math Fun Mania'],
  },
  'Accessibility (WCAG)': {
    description: 'Semantic HTML, ARIA roles, and keyboard navigation for inclusive experiences.',
    usedIn: ['Jack Simon Makes', 'Math Fun Mania'],
  },
  'REST API Integration': {
    description: 'Consuming HTTP endpoints with proper error handling, caching, and auth headers.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },

  // Backend
  'REST API Design': {
    description: 'Designing clean, versioned HTTP APIs with proper status codes and auth.',
    usedIn: ['VuMenu'],
  },
  'Authentication & Authorization (JWT, OAuth)': {
    description: 'Securing routes with token-based auth flows and role-based access control.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'Middleware Architecture': {
    description: 'Request pipelines for logging, validation, auth, and error normalization.',
    usedIn: ['VuMenu'],
  },
  'Webhook Handling': {
    description: 'Verifying and processing signed webhook events from third-party services.',
    usedIn: ['VuMenu'],
  },

  // Salesforce
  'Apex Development': {
    description: 'Strongly-typed server-side Salesforce language for triggers, classes, and logic.',
    usedIn: [],
  },
  'Lightning Web Components (LWC)': {
    description: 'Modern Salesforce UI components built on web standards.',
    usedIn: [],
  },
  'OmniStudio': {
    description: 'Declarative Salesforce toolset for guided flows, data raptors, and integration procedures.',
    usedIn: [],
  },
  'Salesforce Flows': {
    description: 'Point-and-click automation for screen flows, record-triggered logic, and approvals.',
    usedIn: [],
  },
  'SOQL': {
    description: 'Salesforce Object Query Language for retrieving records with filters and relationships.',
    usedIn: [],
  },
  'Platform Events': {
    description: 'Event-driven messaging within Salesforce for real-time data propagation.',
    usedIn: [],
  },
  'Custom Objects & Metadata': {
    description: 'Extending the Salesforce data model with custom objects and configurable metadata types.',
    usedIn: [],
  },
  'Salesforce Integrations': {
    description: 'Connecting Salesforce to external systems via REST, SOAP, and named credentials.',
    usedIn: [],
  },
  'Experience Cloud': {
    description: 'Building branded portals and communities for customers and partners on Salesforce.',
    usedIn: [],
  },
  'CI/CD for Salesforce': {
    description: 'Automating deployments with SFDX, scratch orgs, and GitHub Actions pipelines.',
    usedIn: [],
  },

  // Databases
  'SQL': {
    description: 'Writing queries, joins, aggregations, and transactions against relational databases.',
    usedIn: ['VuMenu'],
  },
  'Data Modeling': {
    description: 'Designing normalized or denormalized schemas to fit application access patterns.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'Schema Design': {
    description: 'Structuring tables, collections, and relationships for integrity and performance.',
    usedIn: ['VuMenu'],
  },
  'Query Optimization': {
    description: 'Profiling slow queries and rewriting them with proper indexes and execution plans.',
    usedIn: [],
  },
  'Database Indexing': {
    description: 'Choosing index types and strategies to minimize read latency at scale.',
    usedIn: [],
  },

  // AI Engineering
  'AI Image-to-Structured-Data Extraction': {
    description: 'Using vision models to parse images into typed JSON objects.',
    usedIn: ['Stashmallows'],
  },
  'LLM Workflow Orchestration': {
    description: 'Chaining model calls, tool use, and memory into multi-step AI workflows.',
    usedIn: [],
  },
  'Queue-Based Processing Systems': {
    description: 'Async task queues that decouple producers from consumers for resilient processing.',
    usedIn: [],
  },
  'Prompt Engineering': {
    description: 'Crafting system prompts and few-shot examples to steer model outputs reliably.',
    usedIn: ['Stashmallows'],
  },
  'Codex Integration': {
    description: 'Integrating OpenAI Codex for code generation and developer tooling features.',
    usedIn: [],
  },
  'AI-Powered Automation Systems': {
    description: 'End-to-end pipelines where AI decisions trigger downstream actions automatically.',
    usedIn: ['Stashmallows'],
  },

  // Commerce
  'Secure Payment Processing': {
    description: 'Handling card data safely via Stripe without touching raw PAN numbers.',
    usedIn: ['VuMenu'],
  },
  'Checkout Session Implementation': {
    description: 'Creating Stripe Checkout sessions with line items, metadata, and success URLs.',
    usedIn: ['VuMenu'],
  },
  'Subscription Logic': {
    description: 'Managing recurring billing, trial periods, and plan upgrades via Stripe Billing.',
    usedIn: [],
  },
  'E-commerce Backend Systems': {
    description: 'Order management, inventory tracking, and payment reconciliation APIs.',
    usedIn: ['VuMenu'],
  },

  // Testing
  'Unit Testing': {
    description: 'Isolated tests for individual functions and components with mocked dependencies.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'React Testing Library': {
    description: 'User-centric component tests that query the DOM the way a user would.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'Automated Test Suites': {
    description: 'CI-integrated test runs that gate merges on passing coverage thresholds.',
    usedIn: [],
  },
  'Regression Testing': {
    description: 'Preventing previously fixed bugs from re-appearing through targeted test coverage.',
    usedIn: [],
  },
  'Test Coverage Optimization': {
    description: 'Identifying untested code paths and prioritizing high-risk areas for coverage.',
    usedIn: [],
  },

  // Serverless & DevOps
  'Serverless Architecture': {
    description: 'Event-triggered functions that scale to zero and remove server management overhead.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'Event-Driven Systems': {
    description: 'Decoupled services that communicate through events rather than direct calls.',
    usedIn: ['VuMenu'],
  },
  'CI/CD Pipelines': {
    description: 'Automated build, test, and deploy workflows triggered on every push.',
    usedIn: ['VuMenu', 'Jack Simon Makes'],
  },
  'Environment Configuration': {
    description: 'Managing secrets and per-environment variables safely across dev, staging, and prod.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },

  // Architecture
  'Full-Stack Application Architecture': {
    description: 'Designing the end-to-end structure spanning frontend, API, and data layers.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'API-First Design': {
    description: 'Defining the API contract before implementation to decouple frontend and backend.',
    usedIn: ['VuMenu'],
  },
  'Scalable System Design': {
    description: 'Architecting systems that handle growth through horizontal scaling and caching.',
    usedIn: [],
  },
  'Modular Code Architecture': {
    description: 'Organizing code into cohesive, loosely coupled modules for maintainability.',
    usedIn: ['VuMenu', 'Jack Simon Makes', 'Stashmallows'],
  },
  'Performance Optimization': {
    description: 'Profiling and improving load times, rendering speed, and runtime efficiency.',
    usedIn: ['Jack Simon Makes', 'Math Fun Mania'],
  },
  'Security Best Practices': {
    description: 'Applying input validation, CSRF protection, rate limiting, and least-privilege access.',
    usedIn: ['VuMenu', 'Stashmallows'],
  },
  'Technical Documentation': {
    description: 'Writing clear READMEs, API docs, and architecture decision records for teams.',
    usedIn: [],
  },
  'Agile / Scrum': {
    description: 'Iterative delivery with sprints, standups, retrospectives, and backlog grooming.',
    usedIn: [],
  },
}

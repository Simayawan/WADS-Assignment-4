'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// We use dynamic import to prevent "window is not defined" errors
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { 
  ssr: false,
  loading: () => <p>Loading API Documentation...</p> 
});

export default function ApiDocs() {
  const spec = {
    openapi: "3.0.0",
    info: {
      title: "Homework Assistant API",
      version: "1.0.0",
      description: "CRUD endpoints for student tools and features",
    },
    paths: {
      "/api/features": {
        get: { 
          summary: "Get all features", 
          responses: { 200: { description: "OK" } } 
        },
        post: { 
          summary: "Add a new feature", 
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    description: { type: "string" }
                  }
                }
              }
            }
          },
          responses: { 201: { description: "Created" } } 
        },
      },
      "/api/features/{id}": {
        put: { 
          summary: "Update a feature", 
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: { 200: { description: "Updated" } } 
        },
        delete: { 
          summary: "Delete a feature", 
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: { 200: { description: "Deleted" } } 
        },
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SwaggerUI spec={spec} />
    </div>
  );
}
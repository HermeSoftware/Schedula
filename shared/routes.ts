
import { z } from 'zod';
import { insertApplicationSchema, insertSubscriberSchema, betaApplications, newsletterSubscribers } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  conflict: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  applications: {
    create: {
      method: 'POST' as const,
      path: '/api/apply' as const,
      input: insertApplicationSchema,
      responses: {
        201: z.custom<typeof betaApplications.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  newsletter: {
    subscribe: {
      method: 'POST' as const,
      path: '/api/subscribe' as const,
      input: insertSubscriberSchema,
      responses: {
        201: z.custom<typeof newsletterSubscribers.$inferSelect>(),
        409: errorSchemas.conflict,
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

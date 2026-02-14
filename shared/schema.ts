
import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const betaApplications = pgTable("beta_applications", {
  id: serial("id").primaryKey(),
  businessName: text("business_name").notNull(),
  sector: text("sector").notNull(),
  monthlyAppointments: text("monthly_appointments").notNull(), // Storing as text range or number string
  employeeCount: text("employee_count").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  reason: text("reason").notNull(),
  status: text("status").default("pending").notNull(), // pending, approved, rejected
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertApplicationSchema = createInsertSchema(betaApplications).omit({ 
  id: true, 
  createdAt: true, 
  status: true 
}).extend({
  email: z.string().email(),
  phone: z.string().min(10, "Valid phone number required"),
});

export const insertSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email(),
});

// === EXPLICIT TYPES ===

export type Application = typeof betaApplications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;

export type Subscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

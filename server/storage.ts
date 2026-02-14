
import { db } from "./db";
import {
  betaApplications,
  newsletterSubscribers,
  type InsertApplication,
  type Application,
  type InsertSubscriber,
  type Subscriber
} from "@shared/schema";

export interface IStorage {
  createApplication(app: InsertApplication): Promise<Application>;
  createSubscriber(sub: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createApplication(app: InsertApplication): Promise<Application> {
    const [application] = await db
      .insert(betaApplications)
      .values(app)
      .returning();
    return application;
  }

  async createSubscriber(sub: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(newsletterSubscribers)
      .values(sub)
      .returning();
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const subscriber = await db.query.newsletterSubscribers.findFirst({
      where: (subs, { eq }) => eq(subs.email, email),
    });
    return subscriber;
  }
}

export const storage = new DatabaseStorage();

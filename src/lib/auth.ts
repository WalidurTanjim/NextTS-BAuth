import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const DB_URI = process.env.M_DB_URI;
if(!DB_URI) {
     throw new Error("Database URI is missing")
}

const client = new MongoClient(DB_URI);
const db = client.db("better-auth-db");

export const auth = betterAuth({
     emailAndPassword: { 
          enabled: true, 
     },
     database: mongodbAdapter(db, {
          client,
     }),
});
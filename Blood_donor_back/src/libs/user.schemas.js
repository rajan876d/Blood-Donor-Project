import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),

  email: z.string().trim().toLowerCase().email("Please enter a valid email"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  role: z.enum(["donor", "recipient"]).default("recipient"),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});
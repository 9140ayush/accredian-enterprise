import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name is too long"),
  workEmail: z
    .string()
    .email("Please enter a valid work email address"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  teamSize: z
    .string()
    .min(1, "Please select a team size"),
  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

import { z } from "zod";

export const companySchema = z.object({
  name: z
    .string()
    .min(2, "Company name must be at least 2 characters"),
  location: z.string().min(1, "Location must be defined"),
  about: z
    .string()
    .min(10, "Please provide some information about your company"),
  logo: z.string().min(1, "Please upload your company logo"),
  website: z.string().url("Please enter a valid URL"),
  xAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  about: z
    .string()
    .min(10, "Please provide some information about yourself"),
  resume: z.string().min(1, "Please upload your resume"),
});

export const jobSchema = z.object({
  jobTitle: z
    .string()
    .min(2, "Job title must be at least 2 characters long"),
  employmentType: z
    .string()
    .min(1, "Please select an employment type"),
  location: z.string().min(1, "Please select location"),
  salaryFrom: z.number().min(1, "Salary from is required"),
  salaryTo: z.number().min(1, "Salary to is required"),
  jobDescription: z.string().min(1, "Job Description is required"),
  listingDuration: z.number().min(1, "Listing duration is required"),
  benefits: z
    .array(z.string())
    .min(1, "Please select at least one benefit"),
  companyName: z.string().min(1, "Company is required"),
  companyLocation: z.string().min(1, "Company location is required"),
  companyAbout: z.string().min(10, "Company description is required"),
  companyLogo: z.string().min(1, "Company logo is required"),
  companyWebsite: z.string().min(1, "Company website is required"),
  companyXAccount: z.string().optional(),
});

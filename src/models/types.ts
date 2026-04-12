import { z } from "zod";

// Schemas

export const gitHubRepoResponseSchema = z.object({
  stargazers_count: z.number().optional(),
});
export type GitHubRepoResponse = z.infer<typeof gitHubRepoResponseSchema>;

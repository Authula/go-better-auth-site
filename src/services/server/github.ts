"use server";

import { CONSTANTS } from "@/constants/constants";
import { gitHubRepoResponseSchema } from "@/models";

export const getGitHubRepoStars = async (): Promise<number | null> => {
  try {
    const response = await fetch(CONSTANTS.githubRepoApiUrl, {
      next: {
        revalidate: 60 * 60 * 24, // Revalidate once a day
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });
    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const validationResult = gitHubRepoResponseSchema.safeParse(data);
    if (!validationResult.success) {
      return null;
    }

    return validationResult.data.stargazers_count ?? null;
  } catch {
    return null;
  }
};

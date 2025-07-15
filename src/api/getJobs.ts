import axios from "axios";

import type { Job } from "@/api/types";

const getJobs = async (): Promise<Job[]> => {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_URL;

    if (!baseUrl) {
      console.warn("VITE_APP_API_URL environment variable is not set");
      return [];
    }

    const url = `${baseUrl}/jobs`;
    const response = await axios.get<Job[]>(url);

    if (!response.data || !Array.isArray(response.data)) {
      console.warn("Invalid response format from jobs API");
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);

    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "API responded with error:",
          error.response.status,
          error.response.statusText,
        );
      } else if (error.request) {
        console.error("No response received from API. Is the backend running?");
      } else {
        console.error("Error setting up request:", error.message);
      }
    }

    return [];
  }
};

export default getJobs;
